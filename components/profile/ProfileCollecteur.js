import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Button, IconButton, Text } from 'react-native-paper'
import { FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { supabase } from '../../lib/supabase';
import Demande from '../../data/Demande';
import Collecteur from '../../data/Collecteur';

export const ProfileCollecteur = ({navigation, route}) => {
  console.log(route.params.profile)
  const [collecteur, setCollecteur] = useState({});
  const [abonnement, setAbonnement] = useState([]);
  const [collecte, setCollecte] = useState([]);
  const [note, setNote] = useState(0);
  const [image, setImage] = useState(null);

  const getCollecteur = () => {
  
      supabase.auth.getUser()
        .then(response => Collecteur.getCollecteurProfile(route.params.profile.email).then(result => setCollecteur(result[0])))
  }

  const getAbonnement = () => {
      if (collecteur.Souscription) {
          if (collecteur.Souscription.length !== 0) {
              setAbonnement(collecteur.Souscription)
              setImage(collecteur.image)
          }
      }
  }

  const getCollecte = () => {
      supabase.auth.getUser()
        .then(response => Demande.getDemandeValidFix(route.params.profile.email).then(result => setCollecte(result)))
  }

  useEffect(() => {
    getCollecteur();
    getAbonnement();
    getCollecte();
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
        {
          image ? (
            <Avatar.Image
              size={130}
              source={{ uri: image}}
            />
          ): (
            <Avatar.Text
              size={130}
              label={`${route.params.profile.nom ? route.params.profile.prenom.charAt(0) + route.params.profile.nom.charAt(0): ""}`}
            />
          )
        }
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Text variant='headlineSmall'>{route.params.profile.prenom + " " + route.params.profile.nom}</Text>
          <Text variant='titleMedium'>{route.params.profile.email}</Text>
          <Text variant='titleMedium'>+243 995 642 184</Text>
          <MyButton text="Se désabonner" mode='contained' />
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
            <Text>{abonnement.length}</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
            <Text>Collectes</Text>
            <Text>{collecte.length}</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
            <Text>Note</Text>
            <Text><FontAwesome name='star' size={18} />{parseFloat(note).toPrecision(2)}</Text>
            </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
          {route.params.profile.description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 100
        }}
      >
        <MyButton icon='alarm' text="Planifier" mode='contained' />
        <MyButton icon='message-text' text="Notifier" mode='contained' />
      </View>
    </ScrollView>
  )
}
