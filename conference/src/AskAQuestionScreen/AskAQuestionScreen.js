import React, { Component, Profiler } from 'react';
import {TextInput, Text, SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Item, Input, Label, Left } from 'native-base';
import { block, color } from 'react-native-reanimated';
import { styles } from './AskQuestionScreenCss'

export default class AskAQuestionScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-mdpi/backwithlogo.png' || '../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' )}>
                        <View style={styles.View1}>
                            <View style={styles.View2}>
                            <ImageBackground style={styles.boardImage} source={require('../../Images/drawable-mdpi/askboard.png' || '../../Images/drawable-xhdpi/askboard.png' || '../../Images/drawable-xxhdpi/askboard.png' || '../../Images/drawable-xxxhdpi/askboard.png' || '../../Images/drawable-hdpi/askboard.png')}>
                    
                              <Text style={styles.nameText}>Muhammad Zaid</Text>
                                <TextInput style={styles.input}
                                placeholder="Please ask a Question"
                                />
                            </ImageBackground>
                            </View>
                            <View style={styles.View3}>
                                <TouchableOpacity style={styles.buttonStyle}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}