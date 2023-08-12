import React from 'react'
import { Dimensions, View } from 'react-native'
import { Card, IconButton, Text } from 'react-native-paper'
import { AntDesign } from "@expo/vector-icons";

const {width, height} = Dimensions.get("screen");

export const CardCollecter = ({navigation, item}) => {
  console.log(item)
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
        onPress={() => navigation.navigate('profileCollecteur', {collecteur: item})}
      >
        <Card.Cover
          style={{
            height: height * 0.15
          }}
          source={{ uri: item.image ? image: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?w=740'}}
        />
        <Card.Title
          title={<Text variant='labelLarge' style={{ fontWeight: 'bold' }}>{item.nom_mark}</Text>}
          subtitle={<><AntDesign name='star' size={18} /> <Text style={{fontWeight: 'bold'}}>3.0</Text> de Note</>}
        />
      </Card>
    </View>
  )
}
