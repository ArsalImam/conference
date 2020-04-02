import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomeScreen';
import SignIn from './src/SignIn/SignIn';
import VerifyUserScreen from './src/VerifiyUserScreen/VerifyUserScreen';
import NotificationScreen from './src/NotificationScreen/NotificationScreen';
import SurveyScreen from './src/SurveyScreen/SurveyScreen';
import PresidentMsgScreen from './src/PresidentMsgScreen/PresidentMsgScreen';

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
          }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="VerifyUserScreen" component={VerifyUserScreen} options={{
          title: 'Enter Code',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="SignIn" component={SignIn}  options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="NotificationScreen" component={NotificationScreen}  options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="SurveyScreen" component={SurveyScreen}  options={{
          title: 'Survey',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="PresidentMsgScreen" component={PresidentMsgScreen}  options={{
          title: 'President Message',
          headerStyle: {
            backgroundColor: 'white',
          }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}/>
          
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
