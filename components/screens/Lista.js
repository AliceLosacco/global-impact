import React, { useState } from "react";
import {
  View
} from 'react-native'
import {
  Avatar,
  Button,
  ListItem,
  Text
} from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Enderecos from "./Enderecos"
import Atualizar from "./Atualizar";

import estilos from '../../styles'
import {
  listar, read
} from '../../services/EnderecosService'

const Lista = (props) => {

  const list = [
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

  const listarEnderecos = () => {
    listar((error, result) => {
      if (error) {
        alert('Não foi possível listar os endereços')
      }
      this.list = result
    })
  }
  
/*  const confirmAlert = (i, id) => {
  //se houverem cartões
  if (cartoes.length) {
    //remove o item
    Alert.alert(
      "Confirmação",
      "Deseja remover o cartão?",
      [
        {
          text: "Sim",
          onPress: () => remover(i, id)
        },
        {
          text: "Não"
        },
      ]
    )
  } */


  return (
    <View style={estilos.screen}>
      <Text h1 h1Style={estilos.title}> Lista de Endereços </Text>

      {
        listarEnderecos(),
        list.map((l, i) => (
          <ListItem key={i} bottomDivider containerStyle={estilos.lista}>
            <Avatar source={{ uri: l.avatar }} />
            <ListItem.Content>
              <ListItem.Title style={estilos.title}>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={estilos.text} >{l.endereco}</ListItem.Subtitle>
              <ListItem.Subtitle style={estilos.text} >{l.horarios}</ListItem.Subtitle>   
            </ListItem.Content>
          </ListItem>
        ))
      }

    </View>
  )
}

export default Lista;