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
  atualizar,
  cadastrar,
  listar,
} from '../../services/EnderecosService'
import estilos from '../../styles'

const Atualizar = (props) => {
  //states usados para armazenar o valor dos inputs
  const [nome, setNome] = useState('')
  const [avatar, setAvatar] = useState('')
  const [endereco, setEndereco] = useState('')
  const [horarios, setHorarios] = useState('')

  const [enderecos, setEnderecos] = useState('')
  const [index, setIndex] = useState('')

  const atualizarEndereco = () => {
    atualizar(nome, avatar, endereco, horarios)
    .then((res) => {
      console.log(res)
      alert('Atualizado com sucesso!')
      props.navigation.navigate('Lista')
    })
    .catch((error) => {
      alert(error)
    })
  }

  return (
      <View style={estilos.screen}>
        <Text h1 h1Style={estilos.title} > Atualizar Endereço </Text>

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
          onPress={() => atualizarEndereco()}
          title="Entrar" />
      </View>
  )
}

export default Atualizar;