import React, { useState } from 'react'
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { borderRadius, statusBar } from '../../ThemValues'
import { MyButton } from '../generic/MyButton'
import { supabase } from '../../lib/supabase'


export const LoginScreen = ({navigation}) => {
    const [eye, setEye] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
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
                <TextInput
                    style={style.textInput}
                    label={'E-mail'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    mode='outlined'
                    left={<TextInput.Icon icon={'email'} />}
                />
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
            <Button
                style={style.button}
                mode='contained'
                disabled={loading}
                onPress={() => signInWithEmail()}
            >Connexion</Button>
            <Button disabled={loading} onPress={() => navigation.navigate('signup')}>Créer un compte</Button>
        </View>
    </View>
  )
}

export const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    logo: {
        width: 180,
        height: 180,
        alignSelf: 'center'
    },
    centerContainer: {
        alignItems: 'center',
    },
    textInput: {
        width: width * 0.7,
        borderRadius: borderRadius,
        marginVertical: 5
    },
    button: {
        width: width * 0.7,
        borderRadius: borderRadius,
        marginVertical: 20
    },
    containerInput: {
        marginTop: 30
    },
    containerScreen: {
        flex: 1,
        marginTop: statusBar,
        justifyContent: 'center'
    }
})
