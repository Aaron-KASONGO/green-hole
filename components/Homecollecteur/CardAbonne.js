import React from 'react'
import { Dimensions, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

const {width, height} = Dimensions.get("screen");

export const CardAbonne = ({navigation, item}) => {

  return (
    <>
        <Card
          style={{
            width: width * 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
          }}

          onPress={() => navigation.navigate('profileAbonne', {item: item})}
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
              item.image ? (
                <Avatar.Image
                source={{ uri: item.image}}
                size={75}
              />
              ): (
                <Avatar.Text
                label={`${item.prenom.charAt(0)+item.nom.charAt(0)}`}
                size={75}
              />
              )

            }
            <View>
              <Text theme={{ colors: { onSurface: '#212121'}}} variant='titleMedium'>{item.prenom + " " + item.nom}</Text>
            </View>
          </View>
        </Card>
    </>
  )
}
