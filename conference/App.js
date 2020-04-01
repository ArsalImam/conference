import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomeScreen';
import { styles } from './src/styles/styles'
import SignIn from './src/SignIn/SignIn'
import VerificationScreen from './src/screens/VerificationScreen'

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#222222', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{
          title: 'Enter Code',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#222222', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="SignIn" component={SignIn}  options={{
          title: 'Sign In',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#222222', headerTitleAlign: 'center'
          }}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
