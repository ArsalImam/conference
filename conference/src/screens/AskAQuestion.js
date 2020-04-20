import React, { Component, Profiler } from 'react';
import {TextInput, Text, SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Item, Input, Label, Left } from 'native-base';
import { block, color } from 'react-native-reanimated';

export default class AskAQuestion extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../assests/img/drawable-mdpi/backwithlogo.png' || '../assests/img/drawable-xhdpi/backwithlogo.png' || '../assests/img/drawable-xxhdpi/backwithlogo.png' || '../assests/img/drawable-xxxhdpi/backwithlogo.png' || '../assests/img/drawable-hdpi/backwithlogo.png' )}>
                        <View style={styles.View1}>
                            <View style={styles.View2}>
                            <ImageBackground style={styles.boardImage} source={require('../assests/img/drawable-mdpi/askboard.png' || '../assests/img/drawable-xhdpi/askboard.png' || '../assests/img/drawable-xxhdpi/askboard.png' || '../assests/img/drawable-xxxhdpi/askboard.png' || '../assests/img/drawable-hdpi/askboard.png')}>
                    
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backImageBox: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    View1: {
        flex: 1,
        margin: 12
    },
    View2: {
        margin: 12,
        flex: 3.5,
        borderRadius: 7       
    },
    boardImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'center'
    },
    View3: {
        flex: 6.5  
    },
    nameText: {
        marginTop: 25,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0d6cc3',
        marginLeft: '20%',
    },
    input: {
        fontSize: 17,
        color: '#333333',
        marginLeft: '20%',
        textAlign: 'justify',
    },
    buttonStyle: {
        flexDirection: 'column',
        width: '50%',
        height: 35,
        alignSelf: 'flex-end',
        margin: 30,
        backgroundColor: '#013f53',
        borderRadius: 5,  
    },
    buttonText: {
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 6
    },
})