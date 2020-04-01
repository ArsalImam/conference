import React, { Component } from 'react';
import { StyleSheet , View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
export default class VerificationScreen extends Component {
  render() {
    return (
      <View style= {styles.Container}>
        <ImageBackground  style={styles.backgoundImage} source={require('../../Images/drawable-xxhdpi/backwithlogo.png')}>
            <Item>
              <Label></Label>
              <Input />
            </Item>

            <TouchableOpacity>
            <Text>Submit</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100,

  },
  backgoundImage: {
     flex: 1,
     width: '100%^',
     height: '100%',
     resizeMode: 'cover'
  },
  buttonStyle:{

      backgroundColor: "white"
  }
})