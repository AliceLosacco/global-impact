
//enviar value no formato obj json

import AsyncStorage from "@react-native-async-storage/async-storage";

export const cadastrar = async (key, value, callback = null) => {
  try {
    const obj = JSON.stringify(value)
    await AsyncStorage.setItem(key, obj, callback)
  } catch (error) {
    throw new Error('Não foi possível inserir o objeto no banco de dados')
  }
}

export const listar = async (key, callback = null) => {
  try {
    await AsyncStorage.read(key, callback)
  } catch (error) {
    throw new Error('Não foi possível no banco de dados com a key' + key)
  }
}

export const excluir = async (callback = null) => {
  try {
    await AsyncStorage.clear(callback)
  } catch (error) {
    throw new Error('Não foi possível apagar a base de dados')
  }
}

export const atualizar = async (key, value, callback = null) => {
  try {
    const obj = JSON.stringify(value)
    await AsyncStorage.mergeItem(key, obj, callback);
  } catch (error) {
    throw new Error('Não foi possível atualizar o endereço')
  }
}
