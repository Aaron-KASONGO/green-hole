import React from 'react'
import { Image, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'

export const CardInfos = ({navigation, item}) => {
  return (
    <>
        <Card
            style={{
                marginBottom: 8,
                borderRadius: borderRadius,
                marginHorizontal: 5
            }}
            onPress={() => navigation.navigate('detailInfos', {item: item})}
        >
            <Card.Content style={{ paddingVertical: 4, paddingStart: 4, display: 'flex', flexDirection: 'row'}}>
            <View>
                <Image style={{ width: 100, height: 100, borderRadius: borderRadius }} source={{ uri: item.thumbnail}} alt='iMAGE' />
            </View>
            <View style={{ flex: 1,paddingVertical: 5, paddingHorizontal: 10 }}>

                <View style={{justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'stretch'}}>
                    
                    <Text variant='titleSmall'>{item.title}</Text>
                    <Text variant='bodySmall'>
                    {item.pubDate}
                    </Text>
                </View>
            </View>
            </Card.Content>
        </Card>
    </>
  )
}
