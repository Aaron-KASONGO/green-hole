import React, { useEffect, useState } from 'react'
import { Modal, ScrollView, View } from 'react-native'
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper'
import { FontAwesome } from "@expo/vector-icons";
import { MyButton } from '../generic/MyButton';
import { supabase } from '../../lib/supabase';
import Demande from '../../data/Demande';
import Collecteur from '../../data/Collecteur';
import DemandeMenage from '../../data/dataMenage/Demande';

export const ProfileCollecteur = ({navigation, route}) => {
  const [collecteur, setCollecteur] = useState({});
  const [abonnement, setAbonnement] = useState([]);
  const [collecte, setCollecte] = useState([]);
  const [note, setNote] = useState(route.params.profile.note);
  const [image, setImage] = useState(null);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [desabonne, setDesabonne] = useState(false);

  const getCollecteur = () => {
  
      supabase.auth.getUser()
        .then(response => Collecteur.getCollecteurProfile(route.params.profile.Collecteur.email).then(result => setCollecteur(result[0])))
  }

  const getAbonnement = () => {
      if (collecteur.Souscription) {
          if (collecteur.Souscription.length !== 0) {
              setAbonnement(collecteur.Souscription)
              setImage(collecteur.image)
          }
      }
  }

  const getCollecte = () => {
      supabase.auth.getUser()
        .then(response => Demande.getDemandeValidFix(route.params.profile.Collecteur.email).then(result => setCollecte(result)))
  }

  const updateNote = () => {
    DemandeMenage.updateNote(route.params.profile.id, note)
    setModalVisibility(false)
  }

  useEffect(() => {
    getCollecteur();
    getAbonnement();
    getCollecte();
  }, []);
  
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 35
        }}
      >
        {
          image ? (
            <Avatar.Image
              size={130}
              source={{ uri: image}}
            />
          ): (
            <Avatar.Text
              size={130}
              label={`${route.params.profile.Collecteur.nom ? route.params.profile.Collecteur.prenom.charAt(0) + route.params.profile.Collecteur.nom.charAt(0): ""}`}
            />
          )
        }
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Text variant='headlineSmall'>{route.params.profile.Collecteur.prenom + " " + route.params.profile.Collecteur.nom}</Text>
          <Text variant='titleMedium'>{route.params.profile.Collecteur.email}</Text>
          <Text variant='titleMedium'>+243 995 642 184</Text>
          <MyButton text="Se désabonner" mode='contained' onPress={() => setDesabonne(true)} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
        }}
      >
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginHorizontal: 20
            }}
        >
            <View style={{ alignItems: 'center'}}>
            <Text>Abonnées</Text>
            <Text>{route.params.profile.Collecteur.Souscription.length}</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
            <Text>Collectes</Text>
            <Text>{collecte.length}</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
            <Text>Note</Text>
            <Text><FontAwesome name='star' size={18} />{parseFloat(route.params.profile.note).toPrecision(2)}</Text>
            </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
        <Text variant='titleMedium'>Description</Text>
        <View>
          <Text>
          {route.params.profile.Collecteur.description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 100
        }}
      >
        <MyButton icon='alarm' text="Planifier" mode='outlined' onPress={() => navigation.navigate('notifier', {idSouscription: route.params.profile.id})} />
        <MyButton icon='message-text' text="Notifier" mode='outlined' onPress={() => navigation.navigate('notifier', {idSouscription: route.params.profile.id})} />
        <MyButton icon='star' text="Noter" mode='outlined' onPress={() => setModalVisibility(true)} />
      </View>
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
                        title={<Text variant='headlineSmall'>Noter</Text>}
                        left={() => <Avatar.Icon icon='exclamation' size={30} />}
                    />
                    <Card.Content>
                      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <Button
                          onPress={() => {
                            if (note < 5) {
                              setNote(note + 0.5)
                            }
                            }}
                        ><Text variant='headlineSmall'>+</Text></Button>
                        <Text variant='titleLarge'>{parseFloat(note).toPrecision(2)}</Text>
                        <Button
                          onPress={() => {
                            if (note > 1) {
                              setNote(note - 0.5)
                            }
                          }}
                        ><Text variant='headlineSmall'>-</Text></Button>
                      </View>
                    </Card.Content>
                    <Card.Actions>
                        <MyButton mode='text' text="Annuler" onPress={() => setModalVisibility(false)} />
                        <MyButton mode='text' text="Confirmer" onPress={updateNote} />
                    </Card.Actions>
                </Card>
            </View>
        </Modal>

        <Modal
            animationType='fade'
            visible={desabonne}
            onDismiss={() => setDesabonne(false)}
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
                        alignSelf: 'center',
                        width: '90%'
                    }}
                >
                    <Card.Title
                        title={<Text variant='headlineSmall'>Désabonner</Text>}
                        left={() => <Avatar.Icon icon='exclamation' size={30} />}
                    />
                    <Card.Content>
                      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        
                        <Text variant='titleMedium'>Voulez-vous vous désabonner de ce Collecteur ?</Text>
                        
                      </View>
                    </Card.Content>
                    <Card.Actions>
                        <MyButton mode='text' text="Annuler" onPress={() => setDesabonne(false)} />
                        <MyButton mode='text' text="Confirmer" />
                    </Card.Actions>
                </Card>
            </View>
        </Modal>
    </ScrollView>
  )
}
