import React, { Component, Profiler } from 'react';
import { View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';


export default class PresidentMsgScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' || '../../Images/drawable-mdpi/backwithlogo.png')}>
                <View style= {{ width: '90%', height: '60%', backgroundColor: 'purple', alignSelf: 'center', margin: '2%'}}></View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
    backImageBox: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null
    }
})