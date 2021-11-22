import React from "react";

import Lista from "./Lista";
import Enderecos from "./Enderecos";
import Atualizar from "./Atualizar";

import list from "../../services/list.png";

import {
  Image
} from 'react-native'

import estilos from "../../styles";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { listar } from "../../services/EnderecosService";

const NavBar = (props) => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: '#fff3d9',
        tabBarActiveTintColor: '#468F44',
        tabBarStyle: estilos.tab
      })}>
      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{
          headerShown: false,
          tabBarLabel: 'Lista',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={list}  />
            ) : (
              <Image source={list} />
            ),
        }} />
      <Tab.Screen
        name="Atualizar"
        component={Atualizar}
        options={{ headerShown: false }} />
      <Tab.Screen
        name="Novo"
        component={Enderecos}
        options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}

export default NavBar