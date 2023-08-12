import React from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Avatar, Badge, Button, Card, IconButton, Text } from 'react-native-paper'
import { Entypo } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { borderRadius } from '../../ThemValues';

export const ProfileAbonne = ({navigation, route}) => {
  
    
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
          route.params.item.image ?
          (
            <Avatar.Image
            size={130}
            source={{ uri: route.params.item.image}}
            />

          ): (
            <Avatar.Text
              label={`${route.params.item.prenom.charAt(0)+route.params.item.nom.charAt(0)}`}
              size={130}
            />
          )
        }
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Text variant='headlineSmall'>{route.params.item.prenom + " " + route.params.item.nom}</Text>
          <Text variant='titleMedium'>{route.params.item.email}</Text>
          <MyButton text="Désabonner" mode='contained' />
        </View>
      </View>
      <View
        style={{
          width: '100%',
        }}
      >
        <View
            style={{
                justifyContent: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginHorizontal: 20
            }}
        >
          {
            route.params.item.latitude ?
            (
            <Card>
              <Card.Title style={{paddingEnd: 10}} left={() => <Entypo name='location' size={25
              } />} right={() => (<Badge style={{backgroundColor: 'green', paddingHorizontal: 5}}>Disponible</Badge>)} title={<Text variant='headlineSmall'>Position</Text>} />
              <Card.Cover
                style={{
                  borderTopStartRadius: 0,
                  borderTopEndRadius: 0,
                  borderBottomStartRadius: borderRadius,
                  borderBottomEndRadius: borderRadius,
                  height: 100
                }}
                source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/77/23/02/1000_F_177230281_B4cU4m4epzAiYdaymuHD47AGXGLBSEeT.jpg'}}
              />
              <Card.Content
                style={{position: 'absolute', bottom: 0}}
                >
              <Text variant='titleSmall'>Avenue Kampemba N°170</Text>

              </Card.Content>
            </Card>

            ): (
              <Card>
              <Card.Title style={{paddingEnd: 10}} left={() => <Entypo name='location' size={25
              } />} right={() => (<Badge style={{backgroundColor: 'red', paddingHorizontal: 5}}>Indisponible</Badge>)} title={<Text variant='headlineSmall'>Position</Text>} />
              <Card.Cover
                style={{
                  borderTopStartRadius: 0,
                  borderTopEndRadius: 0,
                  borderBottomStartRadius: borderRadius,
                  borderBottomEndRadius: borderRadius,
                  height: 100
                }}
                source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/77/23/02/1000_F_177230281_B4cU4m4epzAiYdaymuHD47AGXGLBSEeT.jpg'}}
              />
              <Card.Content
                style={{position: 'absolute', bottom: 0}}
                >
              <Text variant='titleSmall'>{route.params.item.adresse}</Text>

              </Card.Content>
            </Card>
            )
          }
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 15, marginBottom: 100 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
            {route.params.item.description}
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
