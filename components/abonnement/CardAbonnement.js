import React from 'react'
import { Button, Card, IconButton, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Image, View } from 'react-native';

export const CardAbonnement = ({item, navigation}) => {
    /*const data = item.filter((i) => (
        console.log(i)
    ))*/

    const date = new Date(item.created_at).toLocaleDateString("fr-fr", { weekday: 'short',  month: 'short', day: 'numeric' });
    console.log(item)
  return (
    <>
        <Card
            style={{
                marginBottom: 10,
                borderRadius: borderRadius,
                marginHorizontal: 5,
            }}
            onPress={() => navigation.navigate('detailAbonnement',{profile: item})}
        >
            <Card.Content style={{ paddingVertical: 4, paddingStart: 4, display: 'flex', flexDirection: 'row'}}>
            <View>
                <Image style={{ width: 100, height: 140, borderRadius: borderRadius }} source={{ uri: item.Collecteur.image ? item.Collecteur.image : 'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'}} alt='iMAGE' />
            </View>
            <View style={{ flex: 1,paddingVertical: 5, paddingHorizontal: 10  , display: 'flex', justifyContent: 'space-between' }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <View>
                    <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>{item.Collecteur.prenom + " " + item.Collecteur.nom}</Text>
                    </View>
                    <View>
                    <Text variant='bodySmall'>{date}</Text>
                    </View>
                </View>
                <View>
                    <FontAwesome name='bookmark' size={16} />
                </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant='labelMedium'>Note</Text>
                    <Text><AntDesign name='star' size={16} />{item.note}</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant='labelMedium'>Travaux</Text>
                    <Text>{item.Demande.length}</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant='labelMedium'>Abonnées</Text>
                    <Text>{item.Collecteur.Souscription.length}</Text>
                </View>
                </View>
            </View>
            </Card.Content>
        </Card>
    </>
  )
}
