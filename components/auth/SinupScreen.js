import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { style } from './LoginScreen'
import { Button, Text, TextInput } from 'react-native-paper'
import Auth from '../../data/Auth'
import { supabase } from '../../lib/supabase'

export const SinupScreen = ({route, navigation}) => {
  const { userType } = route.params;

  const [eye, setEye] = useState(true);

  const [mark, setMark] = useState('');
  const [adresse, setAdresse] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  function signUpWithEmailMenage() {
    setLoading(true)
    supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          role: 'menage'
        }
      }
    }).then((result) =>{
      console.log(result)
        if (result.error) {
          Alert.alert(result.error.message)
          setLoading(false)
        } else {
          supabase
            .from('Menage')
            .insert([
                {
                    nom: nom,
                    prenom: prenom,
                    adresse: adresse,
                    description: description,
                    email: email
                },
            ])
            .select()
            .then(response => {
              console.log(response);
              setLoading(false)
              navigation.navigate('login')
            })
            .catch(error => setLoading(false))
        }
    }).catch((error) => setLoading(false))
  }

  function signUpWithEmailCollecteur() {
    setLoading(true)
    supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          role: 'collecteur'
        }
      }
    }).then((result) =>{
      console.log(result)
        if (result.error) {
          Alert.alert(result.error.message)
          setLoading(false)
        } else {
          supabase
            .from('Collecteur')
            .insert([
                {
                    nom_mark: mark,
                    nom: nom,
                    prenom: prenom,
                    adresse: adresse,
                    description: description,
                    email: email
                },
            ])
            .select()
            .then(response => {
              console.log(response);
              setLoading(false)
              navigation.navigate('login')
            })
            .catch(error => setLoading(false))
        }
    }).catch((error) => setLoading(false))

  }
    
  return (
    <View
      style={style.containerScreen}
    >
      {
        userType === 'collecteur' ?
        (
          <View style={style.centerContainer}>
            <Text variant='headlineSmall'>Créer un compte collecteur</Text>
            <View
                style={style.containerInput}
            >
              <View
                style={style.containerBetween}
              >
                <TextInput
                    style={style.textInputBetween}
                    label={'Marque'}
                    onChangeText={(text) => setMark(text)}
                    value={mark}
                    mode='outlined'
                    left={<TextInput.Icon icon={'office-building'} />}
                />
                <TextInput
                    style={style.textInputBetween}
                    label={'Adresse'}
                    onChangeText={(text) => setAdresse(text)}
                    value={adresse}
                    mode='outlined'
                    left={<TextInput.Icon icon={'map-marker'} />}
                />
              </View>

              <View
                style={style.containerBetween}
              >
                <TextInput
                    style={style.textInputBetween}
                    label={'Prénom'}
                    onChangeText={(text) => setPrenom(text)}
                    value={prenom}
                    mode='outlined'
                    left={<TextInput.Icon icon={'account'} />}
                />
                <TextInput
                    style={style.textInputBetween}
                    label={'Nom'}
                    onChangeText={(text) => setNom(text)}
                    value={nom}
                    mode='outlined'
                    left={<TextInput.Icon icon={'account'} />}
                />
              </View>

              <View style={style.containerSpace}>

                <TextInput
                    style={style.textInput}
                    label={'E-mail'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    mode='outlined'
                    left={<TextInput.Icon icon={'email'} />}
                />
              </View>

              <View style={style.containerSpace}>

                <TextInput
                    style={style.textInput}
                    label={'Description'}
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    mode='outlined'
                    multiline
                    left={<TextInput.Icon icon={'note-text'} />}
                />
              </View>

              <View style={style.containerBetween}>
                <TextInput
                    style={style.textInputBetween}
                    label={'Créer un mot de passe'}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={eye}
                    mode='outlined'
                    left={<TextInput.Icon icon={'key'} />}
                    right={eye ? <TextInput.Icon icon={'eye'} onPress={() => setEye(false)} /> : <TextInput.Icon icon={'eye-off'} onPress={() => setEye(true)} />}
                />
              </View>
              
            </View>
            <View style={style.containerSpace}>
              <Button
                  style={style.button}
                  mode='contained'
                  disabled={loading}
                  onPress={() => signUpWithEmailCollecteur()}
              >Créer un compte</Button>
              <Button disabled={loading} onPress={() => navigation.navigate('login')}>Se connecter</Button>
            </View>
          </View>
        ):
        (
          <View style={style.centerContainer}>
            <Text variant='headlineSmall'>Créer un compte ménage</Text>
            <View
                style={style.containerInput}
            >

              <View
                style={style.containerBetween}
              >
                <TextInput
                    style={style.textInputBetween}
                    label={'Prénom'}
                    onChangeText={(text) => setPrenom(text)}
                    value={prenom}
                    mode='outlined'
                    left={<TextInput.Icon icon={'account'} />}
                />
                <TextInput
                    style={style.textInputBetween}
                    label={'Nom'}
                    onChangeText={(text) => setNom(text)}
                    value={nom}
                    mode='outlined'
                    left={<TextInput.Icon icon={'account'} />}
                />
              </View>

              <View
                style={style.containerBetween}
              >
                <TextInput
                    style={style.textInputBetween}
                    label={'Adresse'}
                    onChangeText={(text) => setAdresse(text)}
                    value={adresse}
                    mode='outlined'
                    left={<TextInput.Icon icon={'map-marker'} />}
                />
              </View>

              <View style={style.containerSpace}>

                <TextInput
                    style={style.textInput}
                    label={'E-mail'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    mode='outlined'
                    left={<TextInput.Icon icon={'email'} />}
                />
              </View>

              <View style={style.containerSpace}>

                <TextInput
                    style={style.textInput}
                    label={'Description'}
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    mode='outlined'
                    multiline
                    left={<TextInput.Icon icon={'note-text'} />}
                />
              </View>

              <View style={style.containerBetween}>
                <TextInput
                    style={style.textInputBetween}
                    label={'Créer un mot de passe'}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={eye}
                    mode='outlined'
                    left={<TextInput.Icon icon={'key'} />}
                    right={eye ? <TextInput.Icon icon={'eye'} onPress={() => setEye(false)} /> : <TextInput.Icon icon={'eye-off'} onPress={() => setEye(true)} />}
                />
              </View>
              
            </View>
            <View style={style.containerSpace}>
              <Button
                  style={style.button}
                  mode='contained'
                  disabled={loading}
                  onPress={() => signUpWithEmailMenage()}
              >Créer un compte</Button>
              <Button disabled={loading} onPress={() => navigation.navigate('login')}>Se connecter</Button>
            </View>
          </View>
        )
      }
    </View>
  )
}
