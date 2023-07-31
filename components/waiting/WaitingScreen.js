import React, { useState } from 'react'
import { Avatar, Button, Card, Portal, Text } from 'react-native-paper'
import { FlatList, Modal, View } from 'react-native'

import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { CardWaiting } from './CardWaiting';

export const WaitingScreen = () => {
    const [modalVisibility, setModalVisibility] = useState(false);

    const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <View
        style={{
            padding: 10,
        }}
    >
        <FlatList
          scrollEnabled={true}
          data={DATA}
          renderItem={({item}) => <CardWaiting setModalVisibility={setModalVisibility} />}
          keyExtractor={item => item.id}
        />
      
      <View style={{}}>
        <Modal
            animationType='fade'
            visible={modalVisibility}
            onDismiss={() => setModalVisibility(false)}
            transparent={true}
            >
            <View
                style={{ 
                    backgroundColor: 'black',
                    height: '100%',
                    opacity: 0.4
                 }}
            >
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }}
            >
                <Card
                    style={{
                        display: 'flex',
                        alignSelf: 'center'
                    }}
                >
                    <Card.Title
                        title={<Text variant='titleMedium'>Annuler</Text>}
                        left={() => <Avatar.Icon icon='home' size={40} />}
                    />
                    <Card.Content>
                    <Text>Voulez-vous annuler le rappel ?</Text>
                    </Card.Content>
                    <Card.Actions>
                        <MyButton mode='text' text="Annuler" onPress={() => setModalVisibility(false)} />
                        <MyButton mode='text' text="Confirmer" />
                    </Card.Actions>
                </Card>
            </View>
        </Modal>
      </View>
    </View>
  )
}

const DATA = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]
