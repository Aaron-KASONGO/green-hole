import React, { useEffect, useRef, useState } from 'react'
import { Image, ImageBackground, StatusBar, View } from 'react-native'
import { Camera, CameraType, FlashMode, ImageType } from "expo-camera";
import { Button, IconButton, Text } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import StoragePicture from '../../data/StoragePicture';

const height = StatusBar.currentHeight

export const CameraScreen = () => {
    const [type, setType] = useState(CameraType.back)
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const [captured, setCaptured] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false);

    const camera = useRef(null);

    const uploadFile = () => {
      const blob = new FileReader();
      blob.readAsDataURL(captured.uri)

      StoragePicture.uploadFile(blob)
        .then(response => console.log(response))
    }

    const clearUpload = () => {
      setPreviewVisible(false);
      setCaptured(null);
    }

    const granted = async () => {
      const {statut} = await Camera.requestCameraPermissionsAsync();
    }

    const setCameraType = () => {
      setType(current => (current === CameraType.back ? CameraType.front: CameraType.back));
    }

    const takePicture = async () => {
      if (!camera) return
      const photo = await camera.current.takePictureAsync()
      console.log(photo)
      setPreviewVisible(true)
      setCaptured(photo)
    }

    useEffect(() => {
      granted();
    }, []);

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flex: 1,
        marginTop: height
      }}
    >
      {
        previewVisible && captured ?
        (
          <ImageBackground
            source={{uri: captured.uri}}
            style={{
              flex: 1,
              height: '100%',
              width: '100%'
            }}
          >
            <View style={{
              marginTop: 'auto',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 50
            }}>
              <IconButton icon={'close'} size={50} onPress={() => clearUpload()} containerColor='white' />
              <IconButton icon={'check'} size={50} onPress={() => uploadFile()} containerColor='white' />
            </View>
          </ImageBackground>
        ):
        (
          <Camera 
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flex: 1,
              paddingBottom: 40
            }}
            type={type}
            flashMode={flashMode}
            ImageType={ImageType.jpg}
            ref={camera}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10
              }}
            >
              <FontAwesome onPress={() => setFlashMode(current => (current === FlashMode.off ? FlashMode.torch: FlashMode.off))} name='flash' size={25} color={'white'} />
              <AntDesign onPress={() => setCameraType()} name='retweet' size={25} color={'white'} />
              <Entypo name='cross' size={25} color={'white'} />
            </View>
            <View
              style={{
                marginTop: 'auto',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginHorizontal: 60

              }}
            >
              <IconButton icon={'camera'} size={50} onPress={() => takePicture()} containerColor='white' />
            </View>
          </Camera>
        )
      }
    </View>
  )
}
