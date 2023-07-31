import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'

export const CardHistoric = ({title, date}) => {
  return (
    <>
        <Card
          mode='contained'
          style={{
            marginBottom: 3
          }}
        >
          <Card.Title
            title={<Text variant='titleMedium'>{title}</Text>}
            subtitle={<Text variant='bodyMedium'>{date}</Text>}
            left={(props) => <Avatar.Icon {...props} icon='account-hard-hat' />}
          />
        </Card>
    </>
  )
}
