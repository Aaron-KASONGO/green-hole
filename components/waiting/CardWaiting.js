import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import { MaterialIcons } from "@expo/vector-icons";

export const CardWaiting = ({setModalVisibility}) => {
  return (
    <>
        <Card
          style={{
            marginBottom: 3,
            paddingHorizontal: 3,
          }}
        >
          <Card.Title
            title={<Text variant='titleMedium'>12:24pm</Text>}
            subtitle={<Text theme={{ colors: {onSurface: '#757575'}}} variant='bodyMedium'>Recolte Disarde</Text>}
            left={(props) => <Avatar.Icon {...props} icon='alarm' />}
            right={(props) => <MaterialIcons onPress={() => setModalVisibility(true)} name='clear' size={20} />}
          />
        </Card>
    </>
  )
}
