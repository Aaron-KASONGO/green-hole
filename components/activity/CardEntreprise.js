import React from 'react'
import { Dimensions, View } from 'react-native'
import { Card, IconButton, Text } from 'react-native-paper'

const {width, height} = Dimensions.get("screen");

export const CardEntreprise = ({navigation, title, url}) => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginBottom: 10
      }}
    >
      <Card
        style={{
          width: width * 0.45,
        }}
      >
        <Card.Cover
          style={{
            height: height * 0.15
          }}
          source={{ uri: url}}
        />
        <Card.Title
          title={<Text variant='labelLarge' style={{ fontWeight: 'bold' }}>{title}</Text>}
          subtitle={'nous apprenons à tricher !'}
        />
      </Card>
    </View>
  )
}
