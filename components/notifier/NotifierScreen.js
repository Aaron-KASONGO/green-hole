import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Avatar, Button, IconButton, Text } from 'react-native-paper'
import { FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { supabase } from '../../lib/supabase';
import Demande from '../../data/Demande';
import DateTimePicker from "@react-native-community/datetimepicker";
import DemandeMenage from '../../data/dataMenage/Demande';

export const NotifierScreen = ({navigation, route}) => {
 
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const addDemande = () => {
        setLoading(true)
        DemandeMenage.addingDemande(route.params.idSouscription, date.toUTCString())
            .then((response) => {
                setLoading(false)
                navigation.goBack()
            })
    }
  
  return (
    <View
    style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }}
    >
        <View
            style={{
                marginBottom: 100,
                width: 200,
                alignItems: 'center',
            }}
        >
            <Text variant='headlineMedium' style={{textAlign: 'center'}}>{date.toLocaleString("fr-FR", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</Text>
        </View>
    <SafeAreaView
        style={{
        flexDirection: 'row',
        justifyContent: 'center',
        }}
    >
        <MyButton icon='calendar' text="Jour" mode='text' onPress={showDatepicker} />
        <MyButton icon='alarm' text="Heure" mode='text' onPress={showTimepicker} />
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
        )}
    </SafeAreaView>
    <View style={{
        marginTop: 30
    }}>
        <MyButton text="Valider" mode='contained' disabled={loading} onPress={addDemande} />
    </View>
    </View>
  )
}
