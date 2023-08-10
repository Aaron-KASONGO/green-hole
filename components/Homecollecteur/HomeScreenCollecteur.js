import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'
import { Avatar, Button, Card, Divider, FAB, IconButton, Menu, Portal, Text } from 'react-native-paper'
import { borderRadius } from '../../ThemValues'
import { CardAbonne } from './CardAbonne'
import { FontAwesome, Entypo, Feather, AntDesign } from '@expo/vector-icons';
import { MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import Demande from '../../data/Demande'
import { supabase } from '../../lib/supabase'
import { Touchable } from 'react-native'
import Menage from '../../data/Menage'

const {width, height} = Dimensions.get("screen");



export const HomeScreenCollecteur = ({navigation}) => {
  const [state, setState] = useState({ open: false });
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onStateChange = ({ open }) => setState({ open });

  const [agenda, setAgenda] = useState([]);
  const [demande, setDemande] = useState([]);
  const [abonne, setAbonne] = useState([]);

  const [avatarImage, setAvatarImage] = useState(null);

  const { open } = state;

  const updateHeaderLeft = () => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <>
            {avatarImage ? (<TouchableWithoutFeedback onPress={() => navigation.navigate('profile')}><Avatar.Image size={40} source={{}} /></TouchableWithoutFeedback>): (<TouchableWithoutFeedback onPress={() => navigation.navigate('profile')}><Avatar.Text label='KG' size={40} color='green' style={{marginEnd: 5, backgroundColor: 'white'}} /></TouchableWithoutFeedback>)}
          </>
        )
      },
      headerRight: () => {
        return (
          <>
            <FontAwesome color={'#FFFFFF'} name='bell' style={{marginHorizontal: 4}} size={20} onPress={() => navigation.navigate('notifications')} />
          </>
        )
      }
    })
  }


  const getMonAgenda = () => {
    
    supabase.auth.getUser()
      .then(response => Demande.getDemandeValid(response.data.user.email).then(result => setAgenda(result)))
  }

  const getDemande = () => {
    
    supabase.auth.getUser()
      .then(response => Demande.getDemandeNotValid(response.data.user.email).then(result => setDemande(result)))
  }

  const getAbonne = () => {
    
    supabase.auth.getUser()
      .then(response => Menage.getAllMenage(response.data.user.email).then(result => setAbonne(result)))
  }

  useEffect(() => {
    getAbonne();
    getDemande();
    getMonAgenda();
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
            <Text variant='displayMedium'>{agenda.length}</Text>
          </Card.Content>
        </Card>
        <Card
          style={{
            flex: 1,
            marginStart: 5
          }}
          onPress={() => navigation.navigate('demandeList')}
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
            <Text variant='displayMedium'>{demande.length}</Text>
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
        <Text variant='titleMedium' style={{ fontWeight: 'bold', marginVertical: 1}}>Abonnées(15)</Text>
        <Button mode='text' onPress={() => navigation.navigate('voirPlus')} style={{ marginVertical: 1}}>Voir plus</Button>
      </View>
      <View>
      <FlatList
          style={{
            marginBottom: 9
          }}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={DATA}
          renderItem={({item}) => <CardAbonne navigation={navigation} image={''} prenom='Junior' nom='Mamberi' />}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text variant='titleLarge'>Aucun Abonné</Text>
            </View>
          }
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
  {id: 1}
]
