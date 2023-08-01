import React, { useState } from 'react'
import { Dimensions, FlatList, ImageBackground } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import { Button, Card, IconButton, Searchbar, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'

import { FontAwesome5 } from "@expo/vector-icons";
import { CardCollecter } from './CardCollecter'

const {width, height} = Dimensions.get("screen");

const CardCarousel = () => {
    return (
       <View
        style={{
          flex: 1,
          marginStart: 5,
          width: width,
          height: height * 0.25,
        }}
       >
        <Card>
          <Card.Cover
            style={{
              width: width * 0.95,
              height: height * 0.25,
              position: 'absolute',
              borderRadius: borderRadius
            }}
            source={{ uri: 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
          />
          <Text variant='titleMedium'>Je vais taper quelqu'un</Text>
        </Card>
       </View>
    )
}

export const Activity = ({navigation}) => {
  const [search, setSearch] = useState(null);
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          style={{
            width: '95%',
            borderRadius: borderRadius,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginVertical: 5,
            paddingVertical: 2
          }}
          mode='outlined'
        >
          <FontAwesome5 name='search' size={20} />
          <Text>   Search</Text>
        </Button>
        <FlatList
            scrollEnabled={true}
            data={DATA}
            renderItem={({item}) => <CardCarousel />}
            keyExtractor={item => item.id}
            horizontal
          />
      </View>
          
      <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5, paddingHorizontal: 10}}>Collecteurs</Text>
      <FlatList
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10
        }}
        scrollEnabled={true}
        data={DATA}
        renderItem={({item}) => <CardCollecter navigation={navigation} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5, paddingHorizontal: 10}}>Entreprises de Transformation</Text>
      <FlatList
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10
        }}
        scrollEnabled={true}
        data={DATA}
        renderItem={({item}) => <CardCollecter navigation={navigation} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  )
}

const DATA = [
  {
    id: '1',
    title: 'Recolte de déchets par Ramazani',
    date: 'Mard. 09/01'
  },
  {
    id: '2',
    title: 'Recolte de déchets par Zaramani',
    date: 'Mard. 06/01'
  },
  {
    id: '3',
    title: 'Recolte de déchets par Zouk',
    date: 'Mard. 08/01'
  },
  {
    id: '4',
    title: 'Recolte de déchets par Zebre',
    date: 'Mard. 07/01'
  }
]
