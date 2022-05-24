import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="ProductScreen" component={Products} options={{
          title:'Ürünlerimiz',
          headerTintColor:'white',
          headerStyle:{
            backgroundColor:'#cc6600',
          },
          headerTitleAlign:'center'
        }}></Stack.Screen>
        <Stack.Screen name="ProductDetailScreen" component={ProductDetails} options={{
          title:'Ürün Detayı',
          headerStyle:{
            backgroundColor:'#cc6600',
          },
          headerTitleAlign:'center',
          headerTintColor:'white'
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Router