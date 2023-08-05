import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, View } from 'react-native'
import { Avatar, Button, Card, Divider, FAB, IconButton, Menu, Portal, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'
import { CardAbonne } from './CardAbonne'
import { FontAwesome, Entypo, Feather, AntDesign } from '@expo/vector-icons';
import { MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'

const {width, height} = Dimensions.get("screen");



export const HomeScreenCollecteur = ({navigation}) => {
  const [state, setState] = useState({ open: false });
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const updateHeaderLeft = () => {
    navigation.setOptions({
      headerLeft: () =>(<IconButton onPress={() => navigation.navigate('profile')} icon='account-circle' />),
      headerRight: () => {
        return (
          <>
            <FontAwesome color={'#FFFFFF'} name='bell' style={{marginHorizontal: 4}} size={20} onPress={() => navigation.navigate('notifications')} />
            <Entypo color={'#FFFFFF'} name='dots-three-vertical' style={{marginHorizontal: 4}} size={18} />
            <Menu>
              <MenuTrigger text='marche' />
              <MenuOptions>
                <MenuOption text='Historique' />
                <MenuOption text='À propos' />
              </MenuOptions>
            </Menu>
          </>
        )
      }
    })
  }

  useEffect(() => {
    updateHeaderLeft();
  }, []);

  return (
    <>
      <ScrollView
      style={{
        padding:10
      }}
    >
      <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5}}>Travaux effectués</Text>
      <Card>
        <Card.Content
          style={{

            borderRadius: borderRadius,
          }}
          
        >
          <ImageBackground
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: height * 0.24
            }}
            source={require('../../assets/travaux.jpg')}
          >
            <Text style={{ color: 'white'}} variant='displaySmall'>200 Travaux</Text>
            <View></View>
          </ImageBackground>
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
            title={<Text theme={{ colors: { onSurface: '#212121'}}} variant='labelLarge' style={{ fontWeight: 'bold' }}>Mon agenda</Text>}
            right={() => <IconButton icon='progress-alert' />}
          />
          <Card.Content
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <AntDesign color='#00796B' name='calendar' size={30} />
            <Text variant='displayMedium'>14</Text>
          </Card.Content>
        </Card>
        <Card
          style={{
            flex: 1,
            marginStart: 5
          }}
          onPress={() => navigation.navigate('waitinglist')}
        >
          <Card.Title
            title={<Text theme={{ colors: { onSurface: '#212121'}}} variant='labelLarge' style={{ fontWeight: 'bold' }}>Demande(s)</Text>}
            right={() => <IconButton icon='link' />}
          />
          <Card.Content
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <Feather color='#00796B' name='send' size={30} />
            <Text variant='displayMedium'>14</Text>
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 5}}>Abonnées(15)</Text>
        <Button mode='text' onPress={() => navigation.navigate('voirPlus')} style={{ marginVertical: 5}}>Voir plus</Button>
      </View>
      <View>
      <FlatList
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={DATA}
          renderItem={({item}) => <CardAbonne navigation={navigation} />}
          keyExtractor={item => item.id}
          horizontal
        />
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
              icon: 'camera',
              label: 'Trier',
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
      </ScrollView>
    </>
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
