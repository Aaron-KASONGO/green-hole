import React from 'react'
import { Dimensions, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

const {width, height} = Dimensions.get("screen");

export const CardAbonne = () => {
  return (
    <>
        <Card
          style={{
            width: width * 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
              marginHorizontal: 4
            }}
          >
            <Avatar.Image
              source={{ uri: 'https://images.pexels.com/photos/6954192/pexels-photo-6954192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
              size={75}
            />
            <View>
              <Text variant='titleMedium'>Junior Memberi</Text>
            </View>
          </View>
        </Card>
    </>
  )
}
