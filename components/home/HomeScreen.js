import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { FontAwesome5, Entypo, AntDesign } from "@expo/vector-icons";
import { Avatar, Card, FAB, IconButton, Portal, Text } from 'react-native-paper';
import { borderRadius } from '../../ThemValues';
import { CardHistoric } from './Card_Historic';
import DemandeMenage from '../../data/dataMenage/Demande';
import { supabase } from '../../lib/supabase';
import CollecteurMenage from '../../data/dataMenage/Collecteur';


export const HomeScreen = ({navigation}) => {

  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const [enCours, setEnCours] = useState([]);
  const [collecteurs, setCollecteurs] = useState([]);
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
            <IconButton
              onPress={() => navigation.navigate('notifications')}
              icon='bell'
            />
          </>
        )
      }
    })
  }

  console.log(collecteurs)

  const getEnCours = () => {
    
    supabase.auth.getUser()
      .then(response => DemandeMenage.getDemandeEnCours(response.data.user.email).then(result => setEnCours(result)))
  }

  const getCollecteurs = () => {
    
    supabase.auth.getUser()
      .then(response => CollecteurMenage.getCollecteurs(response.data.user.email).then(result => {
        if (result[0]) {
          setCollecteurs(result[0].Souscription)
        }
      }))
  }

  useEffect(() => {
    getCollecteurs();
    getEnCours();
    updateHeaderLeft();
  }, []);
  
  return (
    <View
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
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <AntDesign color='#00796B' name='calendar' size={30} />
            <Text variant='displayMedium'>{enCours.length}</Text>
          </Card.Content>
        </Card>
        <Card
          style={{
            flex: 1,
            marginStart: 5
          }}
          onPress={() => navigation.navigate('abonnementList', {collecteurs: collecteurs})}
        >
          <Card.Title
            title={<Text variant='labelLarge' style={{ fontWeight: 'bold' }}>Abonnement(s)</Text>}
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
            <AntDesign color='#00796B' name='calendar' size={30} />
            <Text variant='displayMedium'>{collecteurs.length}</Text>
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
    </View>
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