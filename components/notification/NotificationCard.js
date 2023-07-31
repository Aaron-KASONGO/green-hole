import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

export const NotificationCard = (props) => {
    const {title, date, time} = props;
  return (
    <Card
        mode='contained'
        style={{
        marginBottom: 3
        }}
        {...props}
    >
          <Card.Title
            title={<Text variant='titleMedium' style={{ fontWeight: 'bold' }}>{title}</Text>}
            subtitle={<Text variant='bodyMedium'>{date}</Text>}
            left={(props) => <Avatar.Icon {...props} icon='bell' />}
            right={(props) => <Button icon={'clock'}>{time}</Button>}
          />
    </Card>
  )
}
