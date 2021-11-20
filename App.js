import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/screens/Login";
import Cadastro from "./components/screens/Cadastro";
import Lista from "./components/screens/Lista";
import Enderecos from "./components/screens/Enderecos"


const Stack = createNativeStackNavigator()

const App = () => {

  const header = {
    title: 'Food Cycle',
    headerStyle: {
      backgroundColor: '#F56A00',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={header}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={header}
        />
        <Stack.Screen
          name="Enderecos"
          component={Enderecos}
          options={header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App