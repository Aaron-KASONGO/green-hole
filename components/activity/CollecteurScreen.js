import React, { useState } from 'react'
import { FlatList, View } from 'react-native';
import { CardCollecter } from './CardCollecter';

export const CollecteurScreen = ({navigation}) => {
    const [search, setSearch] = useState(null);
  return (
    <View
        
    >
        <FlatList
            style={{
                padding: 10,
                paddingTop: 20,
            }}
            scrollEnabled={true}
            data={DATA}
            renderItem={({item}) => <CardCollecter title={item.title} url={item.date} navigation={navigation} />}
            keyExtractor={(item, index) => index}
            numColumns={2}
            />
    </View>
  )
}

const DATA = [
    {
      id: '1',
      title: 'Excellence',
      date: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      temps: 'Encore 1j'
    },
    {
      id: '2',
      title: 'Mpeti Nathan',
      date: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      temps: 'Encore 1j'
    },
    {
      id: '3',
      title: 'Mukuna kanan',
      date: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      temps: 'Encore 1j'
    },
    {
      id: '4',
      title: 'Josh Muleshi',
      date: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      temps: 'Encore 1j'
    },
    {
      id: '5',
      title: 'Prosperine',
      date: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      temps: 'Encore 1j'
    },
    {
      id: '6',
      title: 'Mozarella',
      date: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      temps: 'Encore 1j'
    },
    {
      id: '7',
      title: 'Mangue mur',
      date: 'https://loremflickr.com/320/240',
      temps: 'Encore 1j'
    },
    {
      id: '8',
      title: 'Lundi Matin',
      date: 'https://loremflickr.com/320/240',
      temps: 'Encore 1j'
    },
    {
      id: '9',
      title: 'Webox',
      date: 'https://loremflickr.com/320/240',
      temps: 'Encore 1j'
    }
  ]
