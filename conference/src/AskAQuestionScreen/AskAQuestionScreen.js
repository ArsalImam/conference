import React, { Component, Profiler } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label, Left } from 'native-base';
import { block } from 'react-native-reanimated';

export default class AskAQuestionScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' || '../../Images/drawable-mdpi/backwithlogo.png')}>
                        <View style = {{ flex: 1, margin: 0}}>
                            <View style={styles.boardImageStyle}>
                                <ImageBackground style={styles.boardImage} source={require('../../Images/drawable-xhdpi/askboard.png' || '../../Images/drawable-xxhdpi/askboard.png' || '../../Images/drawable-xxxhdpi/askboard.png' || '../../Images/drawable-hdpi/askboard.png' || '../../Images/drawable-mdpi/askboard.png')}>
                                    <Text style={styles.timeText}>5:00</Text>
                                    <Text style={styles.questionText}> Muhammad Zaid</Text>
                                    <Text style={styles.optionText}>Please select one of the four option for correct anwser.Your selection mean the poll for right.</Text>
                                    <Text style={styles.QnoText}>QUESTION NO.1</Text>
                                </ImageBackground>
                            </View>
                        </View>
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
        resizeMode: 'cover',
        width: null,
        height: null
    },
    boardImage: {
        
           resizeMode: 'center'
    },
    boardImageStyle: {
        height: '33%',
        width: '100%',

        alignSelf: 'center'
    },
    timeText: {
        color: '#013f53',
        textAlign: 'justify',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight: '5%',
        marginTop: 5
    },
    questionText: {
        color: '#0d6cc3',
        textAlign: 'justify',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '15%',
        marginBottom: 10
    },
    optionText: {
        textAlign: 'justify',
        fontSize: 14,
        marginHorizontal: '15%',
    },
    QnoText: {
        color: 'gray',
        textAlign: 'justify',
        fontSize: 14,
        marginTop: 30,
        alignSelf: 'flex-end',
        marginRight: '5%',
    },

})