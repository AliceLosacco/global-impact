import React from "react";
import { View } from "react-native";
import {
  Header,
  Tab
} from 'react-native-elements'

const NavBar = (props) => {

  return (
    <View>
      <Tab >
  <Tab.Item title="recent" />
  <Tab.Item title="favorite" />
  <Tab.Item title="cart" />
</Tab>

 <TabView  >
  <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
    <Text h1>Recent</Text>
  </TabView.Item>
  <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
    <Text h1>Favorite</Text>
  </TabView.Item>
  <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
    <Text h1>Cart</Text>
  </TabView.Item>
</TabView>
    </View>
/*     <Header
      backgroundColor='#F56A00'
      leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
      centerComponent={{ text: 'Food Cycle', style: { color: '#fff' } }}
      rightComponent={{ 
        icon: 'exit-to-app', 
        color: '#fff',  
        onPress: () => this.props.navigation.navigate('Login')
      }}
    /> */

  )
}

export default NavBar