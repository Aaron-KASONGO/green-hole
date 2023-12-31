import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { FontAwesome5, Entypo, AntDesign } from "@expo/vector-icons";
import { Avatar, Card, FAB, IconButton, Portal, Text } from 'react-native-paper';
import { borderRadius } from '../../ThemValues';
import { CardHistoric } from './Card_Historic';
import DemandeMenage from '../../data/dataMenage/Demande';
import { supabase } from '../../lib/supabase';
import CollecteurMenage from '../../data/dataMenage/Collecteur';
import { useIsFocused } from '@react-navigation/native';


export const HomeScreen = ({navigation}) => {

  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const [enCours, setEnCours] = useState([]);
  const [collecteurs, setCollecteurs] = useState([]);
  const [avatarImage, setAvatarImage] = useState(null);
  const [user, setUser] = useState(null);

  console.log(user)

  const focus = useIsFocused();

  const { open } = state;

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

  const getUserProfile = () => {
    supabase.auth.getUser()
      .then(response => CollecteurMenage.getMenage(response.data.user.email).then(result => {
        if (result) {
          setUser(result)
          setAvatarImage(result.image)
        }
      }))
  }

  const updateHeaderLeft = () => {
    
  }

  useEffect(() => {
    const id = setInterval(() => {
      getCollecteurs();
      getEnCours();
      getUserProfile();

      navigation.setOptions({
        headerLeft: () => {
          return (
            <>
              {avatarImage ? (<TouchableWithoutFeedback onPress={() => navigation.navigate('profileUser', {user: user})}><Avatar.Image style={{marginEnd: 5}} size={40} source={{ uri: avatarImage}} /></TouchableWithoutFeedback>): (<TouchableWithoutFeedback onPress={() => navigation.navigate('profileUser', {user: user})}><Avatar.Text label='KG' size={40} color='green' style={{marginEnd: 5, backgroundColor: 'white'}} /></TouchableWithoutFeedback>)}
            </>
          )
        },
        
      })

    }, 10000);
    return () => clearInterval(id)
  }, []);
  
  return (
    <View
      style={{
        padding:10
      }}
    >
      
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
            <AntDesign color='#00796B' name='user' size={30} />
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
          visible={focus}
          icon={open ? 'send' : 'plus'}
          actions={[
            {
              icon: 'camera',
              label: 'broadcast',
              onPress: () => navigation.navigate('camera'),
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