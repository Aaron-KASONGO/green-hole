import React from 'react'
import { Dimensions, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

const {width, height} = Dimensions.get("screen");

export const CardAbonne = ({navigation, image, prenom, nom}) => {
  return (
    <>
        <Card
          style={{
            width: width * 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
          }}

          onPress={() => navigation.navigate('profileAbonne')}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
              marginHorizontal: 4
            }}
          >
            {
              image ? (
                <Avatar.Image
                source={{ uri: image}}
                size={75}
              />
              ): (
                <Avatar.Text
                label={`${prenom.charAt(0)+nom.charAt(0)}`}
                size={75}
              />
              )

            }
            <View>
              <Text theme={{ colors: { onSurface: '#212121'}}} variant='titleMedium'>Junior Memberi</Text>
            </View>
          </View>
        </Card>
    </>
  )
}
