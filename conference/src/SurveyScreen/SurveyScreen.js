import React, { Component, Profiler } from 'react';
import { View, ImageBackground, Image, StyleSheet , TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';


export default class SurveyScreen extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <ImageBackground  style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' || '../../Images/drawable-mdpi/backwithlogo.png')}>

            </ImageBackground>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center" 
    },
    backImageBox: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null
    } 

})
