import React from 'react'
import { CardAbonne } from './CardAbonne'
import { FlatList } from 'react-native'
import { CardVoirPlus } from './CardVoirPlus'

export const VoiPlus = ({navigation}) => {
  return (
    <>
        <FlatList
            style={{
                alignSelf: 'center',
                paddingVertical: 8
            }}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={DATA}
          renderItem={({item}) => <CardVoirPlus navigation={navigation} />}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
    </>
  )
}

const DATA = [
    {
      id: '1',
      title: 'Recolte de déchets par Ramazani',
      date: 'Mard. 09/01'
    },
    {
      id: '2',
      title: 'Recolte de déchets par Zaramani',
      date: 'Mard. 06/01'
    },
    {
      id: '3',
      title: 'Recolte de déchets par Zouk',
      date: 'Mard. 08/01'
    },
    {
      id: '4',
      title: 'Recolte de déchets par Zebre',
      date: 'Mard. 07/01'
    },
    {
      id: '5',
      title: 'Recolte de déchets par Zouzou',
      date: 'Mard. 03/01'
    },
    {
      id: '6',
      title: 'Recolte de déchets par Zouzou',
      date: 'Mard. 03/01'
    },
    {
      id: '7',
      title: 'Recolte de déchets par Zouzou',
      date: 'Mard. 03/01'
    },
    {
      id: '8',
      title: 'Recolte de déchets par Zouzou',
      date: 'Mard. 03/01'
    },
    {
      id: '9',
      title: 'Recolte de déchets par Zouzou',
      date: 'Mard. 03/01'
    }
]