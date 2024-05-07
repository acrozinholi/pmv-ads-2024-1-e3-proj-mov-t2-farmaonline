import 'react-native-gesture-handler';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Cadastro from './pages/autenticacao/cadastro/Cadastro';
import Login from './pages/autenticacao/cadastro/Login';
import Home from './pages/autenticacao/cadastro/Home';
import EditarProduto from './pages/telas/EditarProduto';
import Mais from './pages/telas/mais';
import Produtos from './pages/produtos/Produtos';
import Andamento from './pages/telas/andamento';
import Historico from './pages/telas/Historico'
import Carrinho from './pages/telas/Carrinho';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Carrinho" component={Carrinho} options={{
          headerShown: false,
          headerTransparent: true,
          title: '',
        }} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="EditarProduto" component={EditarProduto} />

        <Stack.Screen name="Cadastro" component={Cadastro}
         options={{
          headerShown: false,
          headerTransparent: true,
          title: '',
        }}  />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Mais" component={Mais} options={{
          headerShown: false,
          headerTransparent: true,
          title: '',
        }} />
        <Stack.Screen name="andamento" component={Andamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});