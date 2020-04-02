import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> This is Home Screen</Text>

        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => { this.props.navigation.navigate('SignIn') }}>
          <Text style={styles.buttonTitle}> Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => { this.props.navigation.navigate('VerifyUserScreen') }}>
          <Text style={styles.buttonTitle}>User Verification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => { this.props.navigation.navigate('NotificationScreen') }}>
          <Text style={styles.buttonTitle}>Notification Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => { this.props.navigation.navigate('SurveyScreen') }}>
          <Text style={styles.buttonTitle}>Survey Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => { this.props.navigation.navigate('PresidentMsgScreen') }}>
          <Text style={styles.buttonTitle}>President Message</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 40
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
    padding: '4%',
    textAlign: 'center',
    alignContent: 'center'

  }
})

export default HomeScreen;