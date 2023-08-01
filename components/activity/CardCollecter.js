import React from 'react'
import { Dimensions, View } from 'react-native'
import { Card, IconButton, Text } from 'react-native-paper'

const {width, height} = Dimensions.get("screen");

export const CardCollecter = ({navigation}) => {
  return (
    <View
      style={{
        marginLeft: 10,
        marginBottom: 3
      }}
    >
      <Card
        style={{
          width: width * 0.45,
        }}
        onPress={() => navigation.navigate('profileCollecteur')}
      >
        <Card.Cover
          style={{
            height: height * 0.15
          }}
          source={{ uri: 'https://images.pexels.com/photos/5119189/pexels-photo-5119189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
        />
        <Card.Title
          title={<Text variant='labelLarge' style={{ fontWeight: 'bold' }}>En cours</Text>}
          subtitle={'nous apprenons à tricher !'}
        />
      </Card>
    </View>
  )
}
