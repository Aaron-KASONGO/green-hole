import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './components/home/HomeScreen';

import { FontAwesome5 } from "@expo/vector-icons";
import { LoginScreen } from './components/auth/LoginScreen';
import { SinupScreen } from './components/auth/SinupScreen';
import { PaperProvider } from 'react-native-paper';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { NotificationScreen } from './components/notification/NotificationScreen';
import { AbonnementScreen } from './components/abonnement/AbonnementScreen';
import { WaitingScreen } from './components/waiting/WaitingScreen';
import { Activity } from './components/activity/Activity';
import { ProfileCollecteur } from './components/ProfileCollecteur/ProfileCollecteur';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name='homeScreen'
          component={HomeScreen}
          options={{
            title: 'Acceuil',
          }}
        />
        <Stack.Screen
          name='profile'
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerShadowVisible: false
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
            title: 'En cours'
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
          component={ProfileScreen}
          options={{
            title: 'Detail Abonnement'
          }}
        />
      </Stack.Navigator>
    </>
  )
}

const ActivityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="activity"
        component={Activity}
        options={{
          title: 'Activités'
        }}
      />
      <Stack.Screen
        name="profileCollecteur"
        component={ProfileCollecteur}
        options={{
          title: 'Profile collecteur'
        }}
      />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {
          true ?
          <Tab.Navigator>
            {
              true ?
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
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({color, size}) => <FontAwesome5 name='newspaper' color={color} size={23} />
                  }}
                />
              </>:
              <>
              <Tab.Screen
                name="Acceuil"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({color, size}) => <FontAwesome5 name='home' color={color} size={23} />
                }}
              />
              <Tab.Screen
                name="Activity"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({color, size}) => <FontAwesome5 name='store' color={color} size={23} />
                }}
              />
              <Tab.Screen
                name="Eco Infos "
                component={HomeScreen}
                options={{
                  tabBarIcon: ({color, size}) => <FontAwesome5 name='newspaper' color={color} size={23} />
                }}
              />
            </>
            }
          </Tab.Navigator> :
          (
            <>
              <Stack.Navigator>
                <Stack.Screen
                  name='login'
                  component={LoginScreen}
                  options={{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                name='signup'
                component={SinupScreen}
                options={{
                  headerShown: false
                }}
                />
              </Stack.Navigator>
            </>
          )
        }
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
