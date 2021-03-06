import React, { useState } from "react";
import {
  View
} from 'react-native'
import {
  Button,
  Header,
  Input,
  Tab,
  Text
} from 'react-native-elements'
import {
  cadastrar,
} from '../../services/EnderecosService'
import estilos from '../../styles'

const Enderecos = (props) => {
  //states usados para armazenar o valor dos inputs
  const [nome, setNome] = useState('')
  const [avatar, setAvatar] = useState('')
  const [endereco, setEndereco] = useState('')
  const [horarios, setHorarios] = useState('')

  const novoEndereco = () => {
    const obj = {nome, avatar, endereco, horarios}
    cadastrar(nome, obj, (error) => {
      if (error) {
        alert('Não foi possível cadastrar o novo endereço')
      }
      else {
        alert('Novo endereço cadastrado com sucesso')
      }

    })
  }

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
          onPress={() => novoEndereco()}
          title="Entrar" />
      </View>
  )
}

export default Enderecos;