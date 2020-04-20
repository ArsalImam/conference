import React, { Component } from 'react';
import {View, ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';

export default class VerifyYUser extends Component {
  render() {
    return (
      <ImageBackground style={styles.backImageContainer} source={require('../assests/img/drawable-xxhdpi/backwithlogo.png')}>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.Container}>
              <Item>
                <Input style={{ alignSelf: 'center' }} />
              </Item>
              <View style={{ height: 0.7, width: '88%', backgroundColor: '#013f53', marginBottom: '5%' }}></View>

              <Label style={styles.labelStyle}>
                A text message was sent to
            </Label>
              <Label style={styles.labelStyle}>+923021234567</Label>
              <Button style={styles.buttonStyle}>
                <Text style={styles.buttonTitle}>Submit</Text>
              </Button>
            </View>
          </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const  styles = StyleSheet.create({
  Container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20%',
  },
  backImageContainer: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  buttonStyle: {    
    backgroundColor: '#013f53',
    width: '88%',
    height: '8%',
    marginTop: '7%',
  },
  buttonTitle: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    padding: 7,
    textAlign: 'center',
    alignContent: 'stretch'

  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: '0.8%',
  }
})
