import React from 'react'
import { View } from 'react-native'
import { WebView } from "react-native-webview";

export const InfoDetailScreen = ({navigation, route}) => {
  route.params.item
  return (
    <View
      style={{
        flex: 1
      }}
    >
        <WebView
          style={{
            width: '100%',
            height: '100%',
            flex: 1
          }}
          source={{ uri: route.params.item.link}}
        />
    </View>
  )
}
