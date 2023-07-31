import React from 'react'
import { Text } from 'react-native-paper'
import { FlatList, View } from 'react-native'
import { NotificationCard } from './NotificationCard'

export const NotificationScreen = () => {
  return (
    <>
    <View
        style={{
            padding: 10
        }}
    >
        <FlatList
          scrollEnabled={true}
          data={DATA}
          renderItem={({item}) => <NotificationCard style={{ marginTop: 10 }} title={item.title} date={item.date} time={item.temps} />}
          keyExtractor={item => item.id}
        />
    </View>
    </>
  )
}


const DATA = [
    {
      id: '1',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '2',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '3',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '4',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '5',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '6',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '7',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '8',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    },
    {
      id: '9',
      title: 'En attente',
      date: 'Michel didier',
      temps: 'Encore 1j'
    }
  ]