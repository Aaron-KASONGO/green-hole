import React from 'react'
import { FlatList, Image, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'
import { CardInfos } from './CardInfos'

export const InfoScreen = ({navigation}) => {
  return (
    <View
    >
        <FlatList
            style={{
                padding: 10,
            }}
            scrollEnabled={true}
            data={DATA}
            renderItem={({item}) => <CardInfos navigation={navigation} title={item.title} url={item.date} />}
            keyExtractor={item => item.id}
            />
    </View>
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
  
