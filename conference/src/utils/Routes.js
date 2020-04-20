import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import VerifyUser from '../screens/VerifyUsers';
import Notification from '../screens/Notification';
import Survey from '../screens/Survey';
import PresidentMsg from '../screens/PresidentMsg';
import AskAQuestion from '../screens/AskAQuestion';
import ImageSlider from '../screens/ImageSlider'
import AddProfile from '../screens/AddProfile'
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="ImageSlider" component={ImageSlider} options={{
            headerShown: false,
            title: 'Image Slider',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} /> 
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: true,
            title: 'My home',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="VerifyUser" component={VerifyUser} options={{
            title: 'Enter Code',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{
            headerShown: false,
            title: '',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Notification" component={Notification} options={{
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Survey" component={Survey} options={{
            title: 'Survey',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="PresidentMsg" component={PresidentMsg} options={{
            title: 'President Message',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="AskAQuestion" component={AskAQuestion} options={{
            title: 'Ask A Question',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }} />
           <Stack.Screen name="AddProfile" component={AddProfile}   options={{
            headerShown: false,
            
            title: 'Add Profile',
            headerStyle: {
              backgroundColor: 'white',
            }, headerTintColor: '#013f53', headerTitleAlign: 'center'
          }}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;