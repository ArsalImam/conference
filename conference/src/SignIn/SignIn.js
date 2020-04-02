import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, StatusBar, View, Image, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { styles } from './SignInCss';

class SignIn extends Component {
  render() {
    return (


      <KeyboardAvoidingView
        behavior={Platform.Os == "ios" ? "padding" : "height"}
        style={styles.containerbox}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.containerbox}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.containerbox}>
              <ImageBackground style={styles.imageContainer}
                source={require('../../Images/drawable-xxhdpi/blankback.png')}>
                <View style={styles.craftBox}>

                  <Image style={styles.imageCraftBox}
                    source={require('../../Images/drawable-xxhdpi/logo.png')}>
                  </Image>
                </View>
                <View style={styles.signinBox}>
                  <ImageBackground style={styles.imageSignInBox} source={require('../../Images/drawable-xxhdpi/handleback.png')}>
                    <Text style={styles.signInText}>Sign In</Text>

                    <Text style={styles.title}>Name</Text>
                    <TextInput style={styles.input}
                      placeholder="Enter your Name"
                      returnKeyType='next'
                      autoCorrect={false}
                    />
                    <Text style={styles.title}>Email</Text>
                    <TextInput style={styles.input}
                      placeholder="Enter your email"
                      keyboardType='email-address'
                      returnKeyType='next'
                      autoCorrect={false}
                    />
                    <Text style={styles.title}>Designation</Text>
                    <TextInput style={styles.input}
                      placeholder="Enter your designation"
                      returnKeyType='next'
                      autoCorrect={false}
                    />
                    <Text style={styles.title}>City</Text>
                    <TextInput style={styles.input}
                      placeholder="Enter your City"
                      returnKeyType='next'
                      autoCorrect={false}
                    />
                    <Text style={styles.title}>Institute</Text>
                    <TextInput style={styles.input}
                      placeholder="Enter your Institute"
                      returnKeyType='next'
                      autoCorrect={false}
                    />
                    <Text style={styles.title}>Contact</Text>
                    <TextInput style={styles.input}
                      placeholder="Enter your Contact Number"
                      keyboardType='phone-number'
                      returnKeyType='next'
                      autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.buttonStyle}>
                      <Text style={styles.buttonTitle}>Submit</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
                <View style={styles.wilshareBox}>
                  <Image style={styles.imageWilshireBox}
                    source={require('../../Images/drawable-xxhdpi/wilshire.png')}>
                  </Image>
                </View>
              </ImageBackground>
            </View>
          </SafeAreaView>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }
}

export default SignIn;