import React, { Component } from 'react';
import { View, ImageBackground, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';
import { styles } from './VerifyUserScreenCss';


export default class VerifyYUserScreen extends Component {
  render() {
    return (
      <ImageBackground style={styles.backImageContainer} source={require('../../Images/drawable-xxhdpi/backwithlogo.png')}>

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
              <Button style={styles.buttonStyle}   onPress={() => { this.props.navigation.navigate('AddProfileScreen')}}>
                <Text style={styles.buttonTitle}>Submit</Text>
              </Button>
            </View>
          </TouchableWithoutFeedback>
      </ImageBackground>

    );
  }
}