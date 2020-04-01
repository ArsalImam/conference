import React, { Component } from 'react';
import {  Button} from 'native-base';
import {KeyboardAvoidingView, TouchableWithoutFeedback,  Keyboard,StatusBar, View, Image, Text, TouchableOpacity, TextInput, StyleSheet ,ImageBackground, SafeAreaView  } from 'react-native';
import { SignInCss } from './SignInCss';

class SignIn extends Component {
  render() {
    return(

      <SafeAreaView style = {SignInCss.container}>
        
      <StatusBar barStyle={"light-content"}/>
      <KeyboardAvoidingView behavior='padding' style={SignInCss.container}>
          <TouchableWithoutFeedback style ={SignInCss.container} 
                  onPress={Keyboard.dismiss}>
        <View style={SignInCss.container}>
           <ImageBackground style={SignInCss.imageContainer   } 
              source={require('../../Images/drawable-xxhdpi/blankback.png')}>
          <View style={SignInCss.craftBox}>
            
            <Image style={SignInCss.imageCraftBox} 
            source={require('../../Images/drawable-xxhdpi/logo.png')}>
            </Image>
          </View>
          <View style={SignInCss.signinBox}>
            <ImageBackground style={SignInCss.imageSignInBox} source={require('../../Images/drawable-xxhdpi/handleback.png')}>
            <Text style={SignInCss.signInText}>Sign In</Text>
            
            <Text style={SignInCss.title}>Name</Text>
            <TextInput style={SignInCss.input}
                                    placeholder="Enter your Name"
                                    returnKeyType='next'
                                    autoCorrect={false} 
                                />
              <Text style={SignInCss.title}>Email</Text>
            <TextInput style={SignInCss.input}
                                    placeholder="Enter your email"
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false} 
                                />
                                <Text style={SignInCss.title}>Designation</Text>
            <TextInput style={SignInCss.input}
                                    placeholder="Enter your designation"
                                    returnKeyType='next'
                                    autoCorrect={false} 
                                />
              <Text style={SignInCss.title}>City</Text>
            <TextInput style={SignInCss.input}
                                    placeholder="Enter your City"
                                    returnKeyType='next'
                                    autoCorrect={false} 
                                />
                                <Text style={SignInCss.title}>Institute</Text>
            <TextInput style={SignInCss.input}
                                    placeholder="Enter your Institute"
                                    returnKeyType='next'
                                    autoCorrect={false} 
                                />
              <Text style={SignInCss.title}>Contact</Text>
            <TextInput style={SignInCss.input}
                                    placeholder="Enter your Contact Number"
                                    keyboardType='phone-number'
                                    returnKeyType='next'
                                    autoCorrect={false} 
                                />

                                  <TouchableOpacity style={SignInCss.buttonStyle}>
                                    <Text style={SignInCss.buttonTitle}>Submit</Text>
                                </TouchableOpacity>
            </ImageBackground>

          </View>
        <View style={SignInCss.wilshareBox}>
        <Image style={SignInCss.imageWilshireBox} 
            source={require('../../Images/drawable-xxhdpi/wilshire.png')}>
            </Image>
        </View>
        </ImageBackground>
      </View>
      
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </SafeAreaView>
      );
  }
}

export default SignIn;