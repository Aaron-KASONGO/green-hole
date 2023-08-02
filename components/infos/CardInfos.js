import React from 'react'
import { Image, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'

export const CardInfos = ({title, url, description, navigation}) => {
  return (
    <>
        <Card
            style={{
                marginBottom: 3,
                borderRadius: borderRadius,
                marginHorizontal: 5
            }}
            onPress={() => navigation.navigate('detailInfos')}
        >
            <Card.Content style={{ paddingVertical: 4, paddingStart: 4, display: 'flex', flexDirection: 'row'}}>
            <View>
                <Image style={{ width: 100, height: 100, borderRadius: borderRadius }} source={require('../../assets/home_service.jpeg')} alt='iMAGE' />
            </View>
            <View style={{ flex: 1,paddingVertical: 5, paddingHorizontal: 10 }}>

                <View>
                    <Text>19/04 04:02</Text>
                    <Text variant='titleMedium'>L'écologie dans les écoles</Text>
                    <Text variant='bodySmall'>
                    1 avr. 2020 — I am using react-native-webview-quilljs to render formatted HTML text.
                    </Text>
                </View>
            </View>
            </Card.Content>
        </Card>
    </>
  )
}
