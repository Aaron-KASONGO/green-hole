import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Avatar, Badge, Button, Card, IconButton, Text } from 'react-native-paper'
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { borderRadius } from '../../ThemValues';
import { supabase } from '../../lib/supabase';
import CollecteurMenage from '../../data/dataMenage/Collecteur';

export const ProfileScreen = ({navigation, route}) => {
  console.log(route.params.collecteur)
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const addUser = () => {
    setLoading(true)
    supabase.auth.getUser()
          .then(response => {
            CollecteurMenage.addAbonne(userId, route.params.collecteur.id)
              .then((response) => setLoading(false))
          })
  }

  const getIdUser = () => {
    supabase.auth.getUser()
          .then(response => {
            CollecteurMenage.getUserId(response.data.user.email)
              .then((response) => setUserId(response.id))
          })
  }

  useEffect(() => {
    getIdUser();
  }, []);
    
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 35
        }}
      >
        <Avatar.Image
        size={130}
        source={{ uri: 'https://images.pexels.com/photos/3265546/pexels-photo-3265546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
        />
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Text variant='headlineSmall'>{route.params.collecteur.prenom + " " + route.params.collecteur.nom}</Text>
          <Text variant='titleMedium'>{route.params.collecteur.email}</Text>
          <Text variant='titleMedium'>+243 995 642 184</Text>
          <MyButton text="S'abonner" mode='contained' onPress={addUser} disabled={loading} />
        </View>
      </View>

      <View
        style={{
          width: '100%',
        }}
      >
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginHorizontal: 20
            }}
        >
            <View style={{ alignItems: 'center'}}>
            <Text>Abonnées</Text>
            <Text>{route.params.collecteur.Souscription.length}</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
            <Text>Collectes</Text>
            <Text>{route.params.collecteur.Souscription.length !== 0 ? route.params.collecteur.Souscription.length: 0}</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
            <Text>Note</Text>
            <Text><FontAwesome name='star' size={18} />{3.4}</Text>
            </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginVertical: 15, marginBottom: 100 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
          {route.params.collecteur.description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >

      </View>
    </ScrollView>
  )
}
