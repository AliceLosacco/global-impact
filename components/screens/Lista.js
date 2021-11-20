import React, { useState } from "react";
import {
  View
} from 'react-native'
import {
  Avatar,
  Button,
  Header,
  Input,
  ListItem,
  Text
} from 'react-native-elements'

import NavBar from "./NavBar";
import estilos from '../../styles'

const Lista = (props) => {

  const {endereco, setEndereco} = props.route.params
  const {horarios, setHorarios} = props.route.params
  const {nome, setNome} = props.route.params
  const {avatar, setAvatar} = props.route.params
  const list = [
    {
      name: 'Super Extra',
      avatar: 'data:image/png;base64,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',
      endereco: 'Rua Santos, 123 - Parque das Águas, SP',
      horarios: '10 às 16 - segunda à sexta'
    },
    {
      name: 'Pão de Sal',
      avatar: 'https://images.rappi.com.br/marketplace/pao_de_azucar_superexpress_1620762615198.png?d=200x200&e=webp',
      endereco: 'Avenida Fonseca, 72 - Centro, RJ',
      horarios: '10 às 20 - segunda à sexta, domingos das 10 às 14'
    }
  ]

  const guardarEndereco = () => {
    const novoEndereco = {
      nome,
      avatar,
      endereco,
      horarios
    }
    list.push(novoEndereco)
  }

  return (
    <View style={estilos.screen}>
      <Text h1 h1Style={estilos.title}> Lista de Endereços </Text>

      {
        guardarEndereco(),
        list.map((l, i) => (
          <ListItem key={i} bottomDivider containerStyle={estilos.lista}>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={estilos.title}>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={estilos.text} >{l.endereco}</ListItem.Subtitle>
              <ListItem.Subtitle style={estilos.text} >{l.horarios}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }

      <Button
        buttonStyle={estilos.confirmButton}
        onPress={() => props.navigation.navigate('Enderecos')}
        title="Administrar Endereços" />
    </View>
  )
}

export default Lista;