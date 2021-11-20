import React, { useState } from "react";
import {
  View,
  Text
} from 'react-native'
import {
  Input,
  Button
} from 'react-native-elements'

import NavBar from './NavBar'
import estilos from '../../styles'

const Cadastro = (props) => {
  //states usados para armazenar o valor dos inputs
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
      <View style={estilos.screen}>
        <NavBar />
        <Text> Cadastro</Text>
        <Input
          label="E-mail"
          placeholder="seuEmail@email.com"
          onChangeText={(txt) => setEmail(txt)}
          value={email} />
        <Input
          label="Senha"
          onChangeText={(txt) => setSenha(txt)}
          value={senha} />
        <Button
        buttonStyle={estilos.confirmButton}
        onPress={() => props.navigation.navigate('Lista')}
          title="Salvar" />
          <Button
          buttonStyle={estilos.secondButton}
          onPress={() => props.navigation.navigate('Login')}
            title="Voltar" />
      </View>
  )
}

export default Cadastro;