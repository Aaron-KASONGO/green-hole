import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export const CardDemande = ({setModalVisibility, item}) => {
  console.log(item)
  const date = new Date(item.date_planification).toLocaleString("fr-fr", { weekday: 'short',  month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })
  return (
    <>
        <Card
          style={{
            marginBottom: 10,
            paddingHorizontal: 3,
          }}
        >
          <Card.Title
            title={<Text variant='titleMedium'>{item.Souscription.Menage.prenom + " " + item.Souscription.Menage.nom}</Text>}
            subtitle={<Text theme={{ colors: {onSurface: '#757575'}}} variant='bodyMedium'>Recolte du {item.date_planification}</Text>}
            left={(props) => <Avatar.Icon {...props} icon='alarm' />}
            right={(props) => item.Validation.length === 0 ? <MaterialIcons onPress={() => setModalVisibility(true)} name='clear' size={20} />: <AntDesign name='check' color={'green'} size={200} />}
          />
        </Card>
    </>
  )
}
