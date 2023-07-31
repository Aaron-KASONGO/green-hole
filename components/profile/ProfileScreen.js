import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { View } from 'react-native'

export const ProfileScreen = () => {
  return (
    <View>
      <View style={{ paddingHorizontal: 20, marginTop: 30}}>
        <Card style={{backgroundColor: 'white', marginTop: 45}}>
          <Card.Content
            style={{
              marginTop: 50
            }}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text variant='titleMedium'>Excellence Kawej</Text>
              <Text variant='bodySmall'>excellence.kawej@gmail.com</Text>
            </View>
            <View style={{marginVertical: 15}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Button icon={'google-maps'} />
                <Text>De la Régie, Coin Kamina et Nzoto</Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Button icon={'cellphone'} />
                <Text>+243 995642184</Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Button icon={'bitcoin'} />
                <Text>125 Points</Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Button icon={'recycle'} />
                <Text>1 Abonnement(s)</Text>
              </View>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Text variant='labelLarge'>Description</Text>
                <Text>Je n'ai pas de description particulière !</Text>
            </View>
          </Card.Content>
        </Card>
        <View style={{
          display: 'flex',
          alignSelf: 'center',
          position: 'absolute',
          borderWidth: 3,
          borderRadius: 60,
          borderColor: 'gray',
          padding: 2
        }}>
          <Avatar.Image style={{
          }}
          size={100}
          source={{ uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} 
          />
        </View>
      </View>
    </View>
  )
}
