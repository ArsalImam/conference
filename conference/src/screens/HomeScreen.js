import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {ScrollView, SafeAreaView, View, Text, TouchableOpacity, } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}> This is Home Screen</Text>

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
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => { this.props.navigation.navigate('AskAQuestionScreen') }}>
            <Text style={styles.buttonTitle}>Ask A Question</Text>
          </TouchableOpacity>

        </View>
        </ScrollView>
      </SafeAreaView>
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
    borderRadius: 7, 
    backgroundColor: '#013f53',
    width: '80%',
    height: 50,
    marginTop: '7%',
  },
  buttonTitle: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 12,
    textAlign: 'center',
    alignContent: 'center'

  }
})

export default HomeScreen;