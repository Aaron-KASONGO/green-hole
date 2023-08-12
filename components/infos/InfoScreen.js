import React, { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'
import { CardInfos } from './CardInfos'

export const InfoScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);

  const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Solacolu"
  const fetchData = () => {
    fetch(url).then((response) => {
      response.json()
        .then(res => setArticles(res.items))
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View
    >
        <FlatList
            style={{
                padding: 10,
            }}
            scrollEnabled={true}
            data={articles}
            renderItem={({item}) => <CardInfos navigation={navigation} item={item} />}
            keyExtractor={item => item.guid}
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
  
