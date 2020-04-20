import React, { Component, Profiler } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';


export default class Notification extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style = {styles.container}>
        <ImageBackground style={styles.backImageBox} source={require('../assests/img/drawable-xhdpi/backwithlogo.png' || '../assests/img/drawable-xxhdpi/backwithlogo.png' || '../assests/img/drawable-xxxhdpi/backwithlogo.png' || '../assests/img/drawable-hdpi/backwithlogo.png' || '../assests/img/drawable-mdpi/backwithlogo.png')}>
          <View style={{ flex: 4.9, alignItems: 'center' }}>
            <ImageBackground style={styles.profileBack} source={require('../assests/img/drawable-xhdpi/profileback.png' || '../assests/img/drawable-xxhdpi/profileback.png' || '../assests/img/drawable-xxxhdpi/profileback.png' || '../assests/img/drawable-hdpi/profileback.png' || '../assests/img/drawable-mdpi/profileback.png')}>
              <Image style={styles.profile} source={require('../assests/img/drawable-xhdpi/profile.png' || '../assests/img/drawable-xxhdpi/profile.png' || '../assests/img/drawable-xxxhdpi/profile.png' || '../assests/img/drawable-hdpi/profile.png' || '../assests/img/drawable-mdpi/profile.png')}></Image>
              <Text style={styles.nameText}>Touqeer Ahmed</Text>
              <Text style={styles.emailText}>touqeerahmed@gmail.com</Text>
              <View style={{ width: '100%', height: 0.7, backgroundColor: '#013f53', marginTop: '2.5%', }}></View>
            </ImageBackground>
          </View>
          <View style={{ flex: 2.3, justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.iconStyle} source={require('../assests/img/drawable-xhdpi/notification.png' || '../assests/img/drawable-xxhdpi/notification.png' || '../assests/img/drawable-xxxhdpi/notification.png' || '../assests/img/drawable-hdpi/notification.png' || '../assests/img/drawable-mdpi/notification.png')}></Image>
              <View style={styles.buttonViewStyle}></View>
              <Text style={styles.buttonText}> Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.iconStyle} source={require('../assests/img/drawable-xhdpi/contact.png' || '../assests/img/drawable-xxhdpi/contact.png' || '../assests/img/drawable-xxxhdpi/contact.png' || '../assests/img/drawable-hdpi/contact.png' || '../assests/img/drawable-mdpi/contact.png')}></Image>
              <View style={styles.buttonViewStyle}></View>
              <Text style={styles.buttonText}> Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.iconStyle} source={require('../assests/img/drawable-xhdpi/logout.png' || '../assests/img/drawable-xxhdpi/logout.png' || '../assests/img/drawable-xxxhdpi/notification.png' || '../assests/img/drawable-hdpi/notification.png' || '../assests/img/drawable-mdpi/logout.png')}></Image>
              <View style={styles.buttonViewStyle}></View>
              <Text style={styles.buttonText}> Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2.8 }}></View>
        </ImageBackground>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  backImageBox: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  },
  profileBack: {
      flex: 1,
      width: '100%',
      height: "55%"
  },
  profile: {
      width: '30%',
      height: "36%",
      alignSelf: 'center',
      marginTop: '26%'
  },
  nameText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#013f53',
      alignSelf: 'center',
      marginTop: 10

  },
  emailText: {

      fontSize: 20,
      color: '#013f53',
      alignSelf: 'center',
      marginTop: 5
  },
  buttonStyle: {
      flexDirection: 'row',
      width: '85%',
      height: '30%',
      alignSelf: 'center'
  },
  iconStyle: {
      width: 33,
      height: 33
  },
  buttonViewStyle: {
      width: '8%',
      height: 2,
      backgroundColor: '#013f53',
      margin: 15
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#013f53',
      marginLeft: 0
  }
})