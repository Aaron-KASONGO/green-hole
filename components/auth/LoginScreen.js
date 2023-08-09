import React, { useState } from 'react'
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { borderRadius, statusBar } from '../../ThemValues'
import { MyButton } from '../generic/MyButton'
import { supabase } from '../../lib/supabase'
import Demande from '../../data/Demande'


export const LoginScreen = ({navigation}) => {
    const [eye, setEye] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true)
        supabase.auth.signInWithPassword({
          email: email,
          password: password,
        }).then((response) => {
            if (response.error) {
                Alert.alert(response.error.message)
            } 
            setLoading(false)
        })
    
        
      }


  return (
    <View
        style={style.containerScreen}
    >
        <View>
            <Image
                source={require('../../assets/icon.png')}
                style={style.logo}
            />
        </View>
        <View
            style={style.centerContainer}
        >
            <Text variant='headlineSmall'>Connectez-vous</Text>
            <View
                style={style.containerInput}
            >
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
                        label={'Votre mot de passe'}
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
                    onPress={() => signInWithEmail()}
                >Connexion</Button>
                <Button disabled={loading} onPress={() => navigation.navigate('beforeSignup')}>Créer un compte</Button>

            </View>
        </View>
    </View>
  )
}

export const {width, height} = Dimensions.get("screen");

export const style = StyleSheet.create({
    logo: {
        width: 180,
        height: 180,
        alignSelf: 'center'
    },
    centerContainer: {
        alignItems: 'center',
    },
    textInput: {
        marginHorizontal: 5
    },
    button: {
        borderRadius: borderRadius,
        marginVertical: 20,
        marginHorizontal: 5
    },
    containerInput: {
        marginTop: 30
    },
    containerScreen: {
        flex: 1,
        marginTop: statusBar,
        justifyContent: 'center'
    },
    containerBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center'
    },
    textInputBetween: {
        flex: 1,
        marginHorizontal: 5
    },
    containerSpace: {
        width: width * 0.9,
        alignSelf: 'center'
    }
})
