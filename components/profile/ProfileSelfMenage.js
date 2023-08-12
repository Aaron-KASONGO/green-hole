import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Avatar, Badge, Button, Card, IconButton, Text } from 'react-native-paper'
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { borderRadius } from '../../ThemValues';
import { supabase } from '../../lib/supabase';
import CollecteurMenage from '../../data/dataMenage/Collecteur';

export const ProfileSelfMenage = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);



  const getIdUser = () => {
    supabase.auth.getUser()
          .then(response => {
            CollecteurMenage.getUserId(response.data.user.email)
              .then((response) => setUserId(response.id))
          })
  }

  useEffect(() => {
    //getIdUser();
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
        source={{ uri: 'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'}}
        />
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Text variant='headlineSmall'></Text>
          <Text variant='titleMedium'></Text>
          <Text variant='titleMedium'>+243 995 642 184</Text>
          <MyButton text="Se déconnecter" mode='contained' onPress={() => supabase.auth.signOut()} disabled={loading} />
        </View>
      </View>


      <View style={{ marginHorizontal: 20, marginVertical: 15, marginBottom: 100 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
          La description
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
