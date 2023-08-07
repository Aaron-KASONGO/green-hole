import React, { useState } from 'react'
import { Button, RadioButton, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

export const BeforeSignup = ({navigation}) => {
    const [state, setState] = useState('menage');

  return (
    <>
        <View
            style={style.containerRadio}
        >
            <RadioButton
                value='collecteur'
                status={state !== 'menage'? 'checked': 'unchecked'}
                onPress={() => setState('collecteur')}
            />
            <Text>Collecteur</Text>
        </View>
        <View
            style={style.containerRadio}
        >
            <RadioButton
                value='menage'
                status={state === 'menage'? 'checked': 'unchecked'}
                onPress={() => setState('menage')}
            />
            <Text>Ménage</Text>
        </View>
        <View>
            <Button mode='contained' onPress={() => navigation.navigate('signup', {userType: state})}>Créer un compte</Button>
        </View>
    </>
  )
}

const style = StyleSheet.create({
    containerRadio: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})