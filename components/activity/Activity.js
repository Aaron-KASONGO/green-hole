import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, ImageBackground } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import { Button, Card, IconButton, Searchbar, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'

import { FontAwesome5 } from "@expo/vector-icons";
import { CardCollecter } from './CardCollecter'
import DemandeMenage from '../../data/dataMenage/Demande'
import CollecteurMenage from '../../data/dataMenage/Collecteur'
import { CardEntreprise } from './CardEntreprise'
import { supabase } from '../../lib/supabase'

const {width, height} = Dimensions.get("screen");

const CardCarousel = ({item}) => {
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
            source={{ uri: item.date}}
          />
        </Card>
       </View>
    )
}

export const Activity = ({navigation}) => {
  const [search, setSearch] = useState(null);
  const [collecteurs, setCollecteurs] = useState([]);

  
  const getAllCollecteur = () => {
    supabase.auth.getUser()
          .then(response => {
            CollecteurMenage.getAllCollecteurs(response.data.user.email)
              .then((response) => setCollecteurs(response))
          })
    
  }

  useEffect(() => {
    getAllCollecteur();
  }, []);

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
          onPress={() => navigation.navigate('searchScreen')}
        >
          <FontAwesome5 name='search' size={20} />
          <Text>   Search</Text>
        </Button>
        <FlatList
            scrollEnabled={true}
            data={DATA}
            renderItem={({item}) => <CardCarousel item={item} />}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
          />
      </View>
          
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5
        }}
      >
        <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5, paddingHorizontal: 10}}>Collecteurs</Text>
        <Button mode='text' style={{ marginVertical: 1}} onPress={() => navigation.navigate('voirCollecteurs')}>Voir plus</Button>
      </View>
      
      <FlatList
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}
        scrollEnabled={true}
        data={collecteurs}
        renderItem={({item}) => <CardCollecter item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5, paddingHorizontal: 10}}>Entreprises de Transformation</Text>
        <Button mode='text' style={{ marginVertical: 1}} onPress={() => navigation.navigate('voirEntreprise')}>Voir plus</Button>
      </View>
      
      <FlatList
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10
        }}
        scrollEnabled={true}
        data={DAT}
        renderItem={({item}) => <CardEntreprise navigation={navigation} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  )
}

const DAT = [
  {
    id: '1',
    title: 'Clean Plast',
    date: 'https://www.cleanplastdrc.com/front/images/cleanplast-logo.png',
    temps: 'Encore 1j'
  },
  {
    id: '3',
    title: 'Innov mag',
    date: 'https://innov-mag.com/wp-content/uploads/2020/12/iconup.png',
    temps: 'Encore 1j'
  },
  
]

const DATA = [
  {
    id: '1',
    title: 'Excellence',
    date: 'https://media.sudouest.fr/1713819/1000x500/so-5f7e6da466a4bd5037d0c6dd-ph0.jpg?v=1602121831',
    temps: 'Encore 1j'
  },
  {
    id: '2',
    title: 'Mpeti Nathan',
    date: 'https://static.les-enovateurs.com/uploads/2020/07/D%C3%A9chets-sauvages.jpg',
    temps: 'Encore 1j'
  },
  {
    id: '3',
    title: 'Mukuna kanan',
    date: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pdfprof.com%2FPDF_Image.php%3Fidt%3D64921%26t%3D18&psig=AOvVaw0MqoFrSlZZqQ7JmqhHMSUE&ust=1691904117616000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiq35Gw1oADFQAAAAAdAAAAABAR',
    temps: 'Encore 1j'
  },
  {
    id: '4',
    title: 'Josh Muleshi',
    date: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamyimages.fr%2Fphotos-images%2Fd%25C3%25A9chets-humains.html&psig=AOvVaw0MqoFrSlZZqQ7JmqhHMSUE&ust=1691904117616000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiq35Gw1oADFQAAAAAdAAAAABAZ',
    temps: 'Encore 1j'
  },
]
