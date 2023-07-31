import React from 'react'
import { Button } from 'react-native-paper'
import { borderRadius, buttonMargin } from '../../ThemValues'

export const MyButton = (props) => {
  return (
    <Button
        {...props}
        style={{
            borderRadius: borderRadius,
            margin: buttonMargin
        }}
    >{props.text}</Button>
  )
}
