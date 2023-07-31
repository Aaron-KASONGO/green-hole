import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { borderRadius, statusBar } from '../../ThemValues'
import { MyButton } from '../generic/MyButton'


export const LoginScreen = () => {
  return (
    <View
        style={{
            flex: 1,
            marginTop: statusBar
        }}
    >
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={require('../../assets/login_background.jpg')}
            resizeMode='cover'
        >
            <View
                style={{
                    justifyContent: 'flex-start',
                    flex: 1,
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../../assets/icon.png')}
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                    <View
                        style={{
                            marginTop: '30%'
                        }}
                    >
                        <MyButton
                            icon='login'
                            mode='elevated'
                            buttonColor='green'
                            textColor='white'
                            text="Se connecter"
                        />
                        <MyButton
                            icon={'account'}
                            text="S'enregistrer"
                            textColor='green'
                            mode='elevated'
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>
  )
}
