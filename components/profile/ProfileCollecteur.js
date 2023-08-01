import React from 'react'
import { View } from 'react-native'
import { Avatar, Button, IconButton, Text } from 'react-native-paper'
import { FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';

export const ProfileCollecteur = () => {
  return (
    <View>
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
          <Text variant='headlineSmall'>Excellence KAWEJ</Text>
          <Text variant='titleMedium'>excellence.kawej@gmail.com</Text>
          <Text variant='titleMedium'>+243 995 642 184</Text>
          <MyButton text="S'abonner" mode='contained' />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%'
        }}
      >
        <View style={{ alignItems: 'center'}}>
          <Text>Abonnées</Text>
          <Text>127</Text>
        </View>
        <View style={{ alignItems: 'center'}}>
          <Text>Collectes</Text>
          <Text>84</Text>
        </View>
        <View style={{ alignItems: 'center'}}>
          <Text>Note</Text>
          <Text><FontAwesome name='star' size={18} />4.5</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
          De quoi souhaitez-vous vous rappeler concernant cette Épingle ?
Ajouter une note
Commentaires
Pas de commentaire pour le moment ! Ajoutez-en un pour lancer la conversation.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <MyButton icon='alarm' text="Planifier" mode='contained' />
        <MyButton icon='message-text' text="Notifier" mode='contained' />
      </View>
    </View>
  )
}
