import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { Avatar, Card, FAB, IconButton, Portal, Text } from 'react-native-paper';
import { borderRadius } from '../../ThemValues';
import { CardHistoric } from './Card_Historic';


export const HomeScreen = ({navigation}) => {
  const [updateHeader, setUpdateHeader] = useState(true);

  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const updateHeaderLeft = () => {
    navigation.setOptions({
      headerLeft: () =>(<IconButton onPress={() => navigation.navigate('profile')} icon='account-circle' />),
      headerRight: () => {
        return (
          <>
            <IconButton
              onPress={() => navigation.navigate('notifications')}
              icon='bell'
            />
            <IconButton
              icon='dots-vertical'
            />
          </>
        )
      }
    })
  }

  useEffect(() => {
    updateHeaderLeft();
  }, []);
  
  return (
    <ScrollView
      style={{
        padding:10
      }}
    >
      <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5}}>Points gagnées</Text>
      <Card>
        <Card.Content
          style={{
            backgroundColor: '#5F8D4E',
            borderRadius: borderRadius
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{
                width: 150,
                height: 170
              }}
            source={require('../../assets/winner.png')}
            />
            <Text style={{ color: 'white'}} variant='displaySmall'>200 Points</Text>
          </View>
        </Card.Content>
      </Card>
      <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5}}>Informations</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Card
          style={{
            flex: 1,
            marginEnd: 5
          }}
          onPress={() => navigation.navigate('waitinglist')}
        >
          <Card.Title
            title={<Text variant='labelLarge' style={{ fontWeight: 'bold' }}>En cours</Text>}
            right={() => <IconButton icon='progress-alert' />}
          />
          <Card.Content
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text variant='displayMedium'>14</Text>
          </Card.Content>
        </Card>
        <Card
          style={{
            flex: 1,
            marginStart: 5
          }}
          onPress={() => navigation.navigate('abonnementList')}
        >
          <Card.Title
            title={<Text variant='labelLarge' style={{ fontWeight: 'bold' }}>Abonnement(s)</Text>}
            right={() => <IconButton icon='link' />}
          />
          <Card.Content
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text variant='displayMedium'>14</Text>
          </Card.Content>
        </Card>
      </View>
      <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5}}>Historique</Text>
      <View>
      <Portal>
        <FAB.Group
          open={open}
          style={{
            marginBottom: 80
          }}
          visible
          icon={open ? 'send' : 'plus'}
          actions={[
            {
              icon: 'account-group',
              label: 'Abonnés',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'account-tie-voice',
              label: 'broadcast',
              onPress: () => console.log('Pressed email'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      </View>
      <SafeAreaView
        style={{
          height: 385
        }}
      >
        <FlatList
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={DATA}
          renderItem={({item}) => <CardHistoric title={item.title} date={item.date} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  )
}


const DATA = [
  {
    id: '1',
    title: 'Recolte de déchets par Ramazani',
    date: 'Mard. 09/01'
  },
  {
    id: '2',
    title: 'Recolte de déchets par Zaramani',
    date: 'Mard. 06/01'
  },
  {
    id: '3',
    title: 'Recolte de déchets par Zouk',
    date: 'Mard. 08/01'
  },
  {
    id: '4',
    title: 'Recolte de déchets par Zebre',
    date: 'Mard. 07/01'
  },
  {
    id: '5',
    title: 'Recolte de déchets par Zouzou',
    date: 'Mard. 03/01'
  },
  {
    id: '6',
    title: 'Recolte de déchets par Zouzou',
    date: 'Mard. 03/01'
  },
  {
    id: '7',
    title: 'Recolte de déchets par Zouzou',
    date: 'Mard. 03/01'
  },
  {
    id: '8',
    title: 'Recolte de déchets par Zouzou',
    date: 'Mard. 03/01'
  },
  {
    id: '9',
    title: 'Recolte de déchets par Zouzou',
    date: 'Mard. 03/01'
  }
]