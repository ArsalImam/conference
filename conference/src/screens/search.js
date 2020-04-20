import React, { Component } from 'react';
import { Text, SafeAreaView, View, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Searchbar from '../Components/searchbar'

export default class AddProfile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../assests/img/drawable-xhdpi/backwithlogo.png' || '../assests/img/drawable-xxhdpi/backwithlogo.png' || '../assests/img/drawable-xxxhdpi/backwithlogo' || '../assests/img/drawable-hdpi/backwithlogo.png' || '../assests/img/drawable-mdpi/backwithlogo.png')}>
                    <Searchbar/>
                    </ImageBackground>
                </View>
            </SafeAreaView>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backImageBox: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
})