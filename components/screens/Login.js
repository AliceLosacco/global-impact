import React, { useState } from "react";
import {
  View
} from 'react-native'
import {
  Button,
  Input,
  Icon,
  Text
} from 'react-native-elements'

import estilos from '../../styles'

const Login = (props) => {
  //states usados para armazenar o valor dos inputs
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <View style={estilos.screen}>
      <View style={estilos.buttonBox}>
        <Icon
          name='carrot'
          type='font-awesome-5'
          iconStyle={estilos.icon}
        />
        <Text h1 h1Style={estilos.title}>Food Cycle</Text>
      </View>
      <View style={estilos.form} >
        <Input
          keyboardType="numeric"
          label="Número de Celular"
          placeholder="(11)912345678"
          onChangeText={(txt) => setTelefone(txt)}
          value={telefone} />
        <Input
          label="Senha"
          onChangeText={(txt) => setSenha(txt)}
          secureTextEntry={true}
          value={senha} />
        <Button
          buttonStyle={estilos.confirmButton}
          onPress={() => props.navigation.navigate('Lista', {
            nome: '',
            avatar: '',
            endereco: '',
            horarios: ''
          })}
          title="Entrar" />
        <Button
          buttonStyle={estilos.confirmButton}
          onPress={() => props.navigation.navigate('Cadastro')}
          title="Cadastro" />
      </View>
    </View>
  )
}

export default Login;