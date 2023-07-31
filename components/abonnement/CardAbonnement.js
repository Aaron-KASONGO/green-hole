import React from 'react'
import { Button, Card, IconButton, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Image, View } from 'react-native';

export const CardAbonnement = ({title, url}) => {
  return (
    <>
        <Card
            style={{
                marginBottom: 3,
                borderRadius: borderRadius
            }}
        >
            <Card.Content style={{ paddingVertical: 4, paddingStart: 4, display: 'flex', flexDirection: 'row'}}>
            <View>
                <Image style={{ width: 100, height: 140, borderRadius: borderRadius }} source={{ uri: url}} alt='iMAGE' />
            </View>
            <View style={{ flex: 1,paddingVertical: 5, paddingHorizontal: 10  , display: 'flex', justifyContent: 'space-between' }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <View>
                    <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>{title}</Text>
                    </View>
                    <View>
                    <Text variant='bodySmall'>Mar. 19, Feb</Text>
                    </View>
                </View>
                <View>
                    <FontAwesome name='bookmark' size={16} />
                </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant='labelMedium'>Note</Text>
                    <Text><AntDesign name='star' size={16} />4.5</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant='labelMedium'>Travaux</Text>
                    <Text>12</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant='labelMedium'>Abonnées</Text>
                    <Text>+12</Text>
                </View>
                </View>
            </View>
            </Card.Content>
        </Card>
    </>
  )
}
