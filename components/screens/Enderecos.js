import React, { useState } from "react";
import {
  View
} from 'react-native'
import {
  Button,
  Header,
  Input,
  Text
} from 'react-native-elements'

import NavBar from "./NavBar";
import estilos from '../../styles'

const Enderecos = (props) => {
  //states usados para armazenar o valor dos inputs
  const [endereco, setEndereco] = useState('')
  const [horarios, setHorarios] = useState('')
  const [avatar, setAvatar] = useState('')
  const [nome, setNome] = useState('')

  return (
      <View style={estilos.screen}>
        <Text h1 h1Style={estilos.title} > Cadastrar novo Endereço </Text>

        <Input
          label="Nome do Estabelecimento"
          onChangeText={(txt) => setNome(txt)}
          value={nome} />
          <Input
            label="Link da Imagem"
            onChangeText={(txt) => setAvatar(txt)}
            value={avatar} />
        <Input
          label="Endereço"
          placeholder=""
          onChangeText={(txt) => setEndereco(txt)}
          value={endereco} />
        <Input
          label="Horário e dias de Funcionamento"
          onChangeText={(txt) => setHorarios(txt)}
          value={horarios} />
        <Button
        buttonStyle={estilos.confirmButton}
          onPress={() => props.navigation.navigate('Lista',{
            endereco,
            horarios
          })}
          title="Salvar" />
      </View>
  )
}

export default Enderecos;