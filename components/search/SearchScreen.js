import React, { useState } from 'react'
import { View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper'

export const SearchScreen = () => {
    const [search, setSearch] = useState(null);
  return (
    <View>
        <Searchbar
            style={{
                borderRadius: 0
            }}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
            />
    </View>
  )
}
