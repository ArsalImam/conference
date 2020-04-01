import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles';

class HomeScreen extends Component {
  render() {
    return(
      
      <View style={styles.container}>
        <Text style = {styles.textStyle}> This is Home Screen</Text>
        <Button style={styles.buttonStyle} 
        onPress = {() => {this.props.navigation.navigate('SignIn')}}
         title = "Go to Next Screen"/>
         <Button 
        onPress = {() => {this.props.navigation.navigate('VerificationScreen')}}
         title = "Go to Native"/>
      </View>
    );
  }
}

export default HomeScreen;
