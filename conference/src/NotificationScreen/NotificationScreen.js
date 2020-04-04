import React, { Component, Profiler } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';
import { styles } from './NotificationScreenCss'


export default class NotificationScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style = {styles.container}>
        <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' || '../../Images/drawable-mdpi/backwithlogo.png')}>
          <View style={{ flex: 4.9, alignItems: 'center' }}>
            <ImageBackground style={styles.profileBack} source={require('../../Images/drawable-xhdpi/profileback.png' || '../../Images/drawable-xxhdpi/profileback.png' || '../../Images/drawable-xxxhdpi/profileback.png' || '../../Images/drawable-hdpi/profileback.png' || '../../Images/drawable-mdpi/profileback.png')}>
              <Image style={styles.profile} source={require('../../Images/drawable-xhdpi/profile.png' || '../../Images/drawable-xxhdpi/profile.png' || '../../Images/drawable-xxxhdpi/profile.png' || '../../Images/drawable-hdpi/profile.png' || '../../Images/drawable-mdpi/profile.png')}></Image>
              <Text style={styles.nameText}>Touqeer Ahmed</Text>
              <Text style={styles.emailText}>touqeerahmed@gmail.com</Text>
              <View style={{ width: '100%', height: 0.7, backgroundColor: '#013f53', marginTop: '2.5%', }}></View>
            </ImageBackground>
          </View>
          <View style={{ flex: 2.3, justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.iconStyle} source={require('../../Images/drawable-xhdpi/notification.png' || '../../Images/drawable-xxhdpi/notification.png' || '../../Images/drawable-xxxhdpi/notification.png' || '../../Images/drawable-hdpi/notification.png' || '../../Images/drawable-mdpi/notification.png')}></Image>
              <View style={styles.buttonViewStyle}></View>
              <Text style={styles.buttonText}> Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.iconStyle} source={require('../../Images/drawable-xhdpi/contact.png' || '../../Images/drawable-xxhdpi/contact.png' || '../../Images/drawable-xxxhdpi/contact.png' || '../../Images/drawable-hdpi/contact.png' || '../../Images/drawable-mdpi/contact.png')}></Image>
              <View style={styles.buttonViewStyle}></View>
              <Text style={styles.buttonText}> Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.iconStyle} source={require('../../Images/drawable-xhdpi/logout.png' || '../../Images/drawable-xxhdpi/logout.png' || '../../Images/drawable-xxxhdpi/notification.png' || '../../Images/drawable-hdpi/notification.png' || '../../Images/drawable-mdpi/logout.png')}></Image>
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