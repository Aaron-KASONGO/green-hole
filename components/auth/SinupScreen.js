import React, { useState } from 'react'
import { View } from 'react-native'
import { style } from './LoginScreen'
import { Button, Text, TextInput } from 'react-native-paper'

export const SinupScreen = ({navigation}) => {
  const [eye, setEye] = useState(true);
  const [mark, setMark] = useState('');
  const [adresse, setAdresse] = useState('');
  const [prenom, setPrenom] = useState('');
  const [Nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }
    
  return (
    <View
      style={style.containerScreen}
    >
      <View style={style.centerContainer}>
        <Text variant='headlineSmall'>Créer un compte</Text>
        <View
            style={style.containerInput}
        >
          <View
            style={style.containerBetween}
          >
            <TextInput
                style={style.textInputBetween}
                label={'Marque'}
                onChangeText={(text) => setEmail(text)}
                value={email}
                mode='outlined'
                left={<TextInput.Icon icon={'email'} />}
            />
            <TextInput
                style={style.textInputBetween}
                label={'Adresse'}
                onChangeText={(text) => setEmail(text)}
                value={email}
                mode='outlined'
                left={<TextInput.Icon icon={'email'} />}
            />
          </View>

          <View
            style={style.containerBetween}
          >
            <TextInput
                style={style.textInputBetween}
                label={'Prénom'}
                onChangeText={(text) => setEmail(text)}
                value={email}
                mode='outlined'
                left={<TextInput.Icon icon={'email'} />}
            />
            <TextInput
                style={style.textInputBetween}
                label={'Nom'}
                onChangeText={(text) => setEmail(text)}
                value={email}
                mode='outlined'
                left={<TextInput.Icon icon={'email'} />}
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
                onChangeText={(text) => setEmail(text)}
                value={email}
                mode='outlined'
                multiline
                left={<TextInput.Icon icon={'email'} />}
            />
          </View>

          <View style={style.containerBetween}>
            <TextInput
                style={style.textInputBetween}
                label={'Votre mot de passe'}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={eye}
                mode='outlined'
                left={<TextInput.Icon icon={'key'} />}
                right={eye ? <TextInput.Icon icon={'eye'} onPress={() => setEye(false)} /> : <TextInput.Icon icon={'eye-off'} onPress={() => setEye(true)} />}
            />
            <TextInput
                style={style.textInputBetween}
                label={'Confirmez le mdp'}
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
          >Créer un compte</Button>
          <Button disabled={loading} onPress={() => navigation.navigate('login')}>Se connecter</Button>
        </View>
      </View>
    </View>
  )
}
