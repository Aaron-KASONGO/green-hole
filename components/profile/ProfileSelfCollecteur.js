import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Button, IconButton, Text } from 'react-native-paper'
import { FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import Collecteur from '../../data/Collecteur';
import { supabase } from '../../lib/supabase';
import Demande from '../../data/Demande';
import Note from '../../data/Note';

export const ProfileSelfCollecteur = () => {
    const [collecteur, setCollecteur] = useState({});
    const [abonnement, setAbonnement] = useState([]);
    const [collecte, setCollecte] = useState([]);
    const [image, setImage] = useState(null);

    const getCollecteur = () => {
    
        supabase.auth.getUser()
          .then(response => Collecteur.getCollecteurProfile(response.data.user.email).then(result => setCollecteur(result[0])))
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
          .then(response => Demande.getDemandeValidFix(response.data.user.email).then(result => setCollecte(result)))
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
              source={{ uri: 'https://images.pexels.com/photos/3265546/pexels-photo-3265546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
            />
          ): (
            <Avatar.Text
              size={130}
              label={`${collecteur.nom ? collecteur.prenom.charAt(0) + collecteur.nom.charAt(0): ""}`}
            />
          )
        }
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Text variant='headlineSmall'>{collecteur.prenom + " " + collecteur.nom}</Text>
          <Text variant='titleMedium'>{collecteur.email}</Text>
          <Text variant='titleMedium'>{collecteur.adresse}</Text>
          <MyButton text="Se déconnecter" onPress={() => supabase.auth.signOut()} mode='contained' />
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
            <Text><FontAwesome name='star' size={18} />{2.3}</Text>
            </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
            {collecteur.description}
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
