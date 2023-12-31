import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { HomeScreen } from './components/home/HomeScreen';

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'

import { FontAwesome5 } from "@expo/vector-icons";
import { LoginScreen } from './components/auth/LoginScreen';
import { SinupScreen } from './components/auth/SinupScreen';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { NotificationScreen } from './components/notification/NotificationScreen';
import { AbonnementScreen } from './components/abonnement/AbonnementScreen';
import { WaitingScreen } from './components/waiting/WaitingScreen';
import { Activity } from './components/activity/Activity';
import { ProfileCollecteur } from './components/profile/ProfileCollecteur';
import { SearchScreen } from './components/search/SearchScreen';
import { InfoScreen } from './components/infos/InfoScreen';
import { InfoDetailScreen } from './components/infodetail/InfoDetailScreen';
import { HomeScreenCollecteur } from './components/Homecollecteur/HomeScreenCollecteur';
import { MenuProvider } from 'react-native-popup-menu';
import { ProfileAbonne } from './components/profile/ProfileAbonne';
import { VoiPlus } from './components/Homecollecteur/VoiPlus';
import { BeforeSignup } from './components/auth/BeforeSignup';
import Demande from './data/Demande';
import Menage from './data/Menage';
import Collecteur from './data/Collecteur';
import DemandeMenage from './data/dataMenage/Demande';
import { ProfileSelfCollecteur } from './components/profile/ProfileSelfCollecteur';
import { NotifierScreen } from './components/notifier/NotifierScreen';
import { CollecteurScreen } from './components/activity/CollecteurScreen';
import { ProfileSelfMenage } from './components/profile/ProfileSelfMenage';
import { CameraScreen } from './components/camera/CameraScreen';
import { DemandeList } from './components/waiting/DemandeList';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen
          name='homeScreen'
          component={HomeScreen}
          options={{
            title: 'Acceuil',
          }}
        />
        <Stack.Screen
          name='camera'
          component={CameraScreen}
          options={{
            title: 'Camera',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='profile'
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerShadowVisible: false,
            animation: 'slide_from_left'
          }}
        />
        <Stack.Screen
          name='profileUser'
          component={ProfileSelfMenage}
          options={{
            title: 'Profile',
            headerShadowVisible: false,
            animation: 'slide_from_left'
          }}
        />
        <Stack.Screen
          name='notifications'
          component={NotificationScreen}
          options={{
            title: 'Notifications'
          }}
        />
        <Stack.Screen
          name='abonnementList'
          component={AbonnementScreen}
          options={{
            title: 'Abonnements'
          }}
        />

        <Stack.Screen
          name='waitinglist'
          component={WaitingScreen}
          options={{
            title: 'En cours',
            animation: 'slide_from_left'
          }}
        />
        
        <Stack.Screen
          name='about'
          component={HomeScreen}
          options={{
            title: 'À propos'
          }}
        />
        <Stack.Screen
          name='detailAbonnement'
          component={ProfileCollecteur}
          options={{
            title: 'Detail Abonnement'
          }}
        />
        <Stack.Screen
          name='notifier'
          component={NotifierScreen}
          options={{
            title: 'Créer notification'
          }}
        />
      </Stack.Navigator>
    </>
  )
}

const ActivityStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen
        name="activity"
        component={Activity}
        options={{
          title: 'Activités'
        }}
      />
      <Stack.Screen
        name="profileCollecteur"
        component={ProfileScreen}
        options={{
          title: 'Profile collecteur'
        }}
      />
      <Stack.Screen
        name="searchScreen"
        component={SearchScreen}
        options={{
          title: 'Recherche collecteurs'
        }}
      />
      <Stack.Screen
        name="voirCollecteurs"
        component={CollecteurScreen}
        options={{
          title: 'Collecteurs'
        }}
      />
      <Stack.Screen
        name="voirEntreprise"
        component={CollecteurScreen}
        options={{
          title: 'Entreprises'
        }}
      />
    </Stack.Navigator>
  )
}

const InfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="infoScreen"
        component={InfoScreen}
        options={{
          title: 'Eco Infos'
        }}
      />

    <Stack.Screen
        name="detailInfos"
        component={InfoDetailScreen}
        options={{
          title: 'Detail infos'
        }}
      />
    </Stack.Navigator>
  )
}

const HomeCollecteurSack = ()  => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen
        name='homeCollecteur'
        component={HomeScreenCollecteur}
        options={{
          title: 'Acceuil'
        }}
      />

      <Stack.Screen
          name='profile'
          component={ProfileSelfCollecteur}
          options={{
            title: 'Profile',
            headerShadowVisible: false,
            animation: 'slide_from_left'
          }}
        />
        <Stack.Screen
          name='notifications'
          component={NotificationScreen}
          options={{
            title: 'Notifications'
          }}
        />

        <Stack.Screen
          name='waitinglist'
          component={WaitingScreen}
          options={{
            title: 'Agenda',
            animation: 'slide_from_left'
          }}
        />

        <Stack.Screen
          name='demandeList'
          component={DemandeList}
          options={{
            title: 'Demandes'
          }}
        />

        <Stack.Screen
          name='profileAbonne'
          component={ProfileAbonne}
          options={{
            title: 'Profile Abonné'
          }}
        />

        <Stack.Screen
          name='voirPlus'
          component={VoiPlus}
          options={{
            title: 'Abonnés'
          }}
        />
        
        <Stack.Screen
          name='about'
          component={HomeScreen}
          options={{
            title: 'À propos'
          }}
        /> 
    </Stack.Navigator>
  )
}


export default function App() {

  const [session, setSession] = useState(null)
  const [sessionTrue, setSessionTrue] = useState(false);
  const [collecteur, setCollecteur] = useState('null');

  //Demande.getDemandeValid(session.user.email).then(response => console.log(response))

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setSessionTrue(true)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        {
          (session && session.user) ?
          <Tab.Navigator
            screenOptions={{
              
            }}
          >

            {
              session.user.user_metadata.role === 'menage' ?
              <>
                <Tab.Screen
                  name="Acceuil"
                  component={HomeStack}
                  options={{
                    tabBarIcon: ({color, size}) => <FontAwesome5 name='home' color={color} size={23} />
                  }}
                />
                <Tab.Screen
                  name="Activity"
                  component={ActivityStack}
                  options={{
                    tabBarIcon: ({color, size}) => <FontAwesome5 name='store' color={color} size={23} />
                  }}
                />
                <Tab.Screen
                  name="Eco Infos "
                  component={InfoStack}
                  options={{
                    tabBarIcon: ({color, size}) => <FontAwesome5 name='newspaper' color={color} size={23} />
                  }}
                />
              </>:
              <>
              <Tab.Screen
                name="Acceuil"
                component={HomeCollecteurSack}
                options={{
                  tabBarIcon: ({color, size}) => <FontAwesome5 name='home' color={color} size={23} />
                }}
              />
              <Tab.Screen
                name="Activity"
                component={ActivityStack}
                options={{
                  tabBarIcon: ({color, size}) => <FontAwesome5 name='store' color={color} size={23} />
                }}
              />
              <Tab.Screen
                name="Eco Infos "
                component={InfoStack}
                options={{
                  tabBarIcon: ({color, size}) => <FontAwesome5 name='newspaper' color={color} size={23} />
                }}
              />
            </>
            }
          </Tab.Navigator> :
          (sessionTrue ?
            <>
              <Stack.Navigator
                screenOptions={{
                  gestureDirection: 'vertical',
                  animation: 'slide_from_bottom',
                }}
              >
                <Stack.Screen
                  name='login'
                  component={LoginScreen}
                  options={{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name='beforeSignup'
                  component={BeforeSignup}
                />
                <Stack.Screen
                name='signup'
                component={SinupScreen}
                options={{
                  headerShown: false
                }}
                />
              </Stack.Navigator>
            </>: 
            <Stack.Navigator>
              <Stack.Screen
                name='splash'
                component={SplashScreen}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          )
        }
        <StatusBar style='inverted' />
      </NavigationContainer>
    </PaperProvider>
  );
}

const SplashScreen = () => {
  return (
    <>
    <View>
      <Text>En attendant !</Text>
    </View>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#009688',
    onPrimaryContainer: '#FFFFFF',
    primaryContainer: '#00796B',
    secondary: '#B2DFDB',
    tertiary: '#FFFFFF',
    brandPrimary: '#009688',
    onSurface: '#00796B',
    outline: '#00796B'
  }
}

const navTheme = {
  dark: false,
  colors: {
    primary: '#00796B',
    background: '#fefefe',
    card: '#00796B',
    text: '#FFFFFF',
    border: '#00796B',
  }
}
