import React, { Component, Profiler } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';

export default class Survey extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../assests/img/drawable-xhdpi/backwithlogo.png' || '../assests/img/drawable-xxhdpi/backwithlogo.png' || '../assests/img/drawable-xxxhdpi/backwithlogo.png' || '../assests/img/drawable-hdpi/backwithlogo.png' || '../assests/img/drawable-mdpi/backwithlogo.png')}>
                        <View style={styles.innercontainer}>
                            <View style={styles.boardView}>
                                <ImageBackground style={styles.boardImage} source={require('../assests/img/drawable-xhdpi/questionboard.png' || '../assests/img/drawable-xxhdpi/questionboard.png' || '../assests/img/drawable-xxxhdpi/questionboard.png' || '../assests/img/drawable-hdpi/questionboard.png' || '../assests/img/drawable-mdpi/questionboard.png')}>
                                    <Text style={styles.timeText}>5:00</Text>
                                    <Text style={styles.questionText}> This is Survey Question</Text>
                                    <Text style={styles.optionText}>Please select one of the four option for correct anwser.Your selection mean the poll for right.</Text>
                                    <Text style={styles.QnoText}>QUESTION NO.1</Text>
                                </ImageBackground>
                            </View><
                                View style={styles.blankView}>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.bluebuttonStyle}>
                                    <Text style={styles.whiteText}> A.     Option 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.WhitebuttonStyle}>
                                    <Text style={styles.blueText}> B.     Option 2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.WhitebuttonStyle}>
                                    <Text style={styles.blueText}> C.     Option 3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.WhitebuttonStyle}>
                                    <Text style={styles.blueText}> D.     Option 4</Text>
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
        width: null,
        height: null
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 100
    },
    boardView: {
        flex: 4,
        alignContent: 'center',
        alignSelf: "center",
        alignItems: 'center'
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
        color: '#013f53',
        textAlign: 'justify',
        fontSize: 17,
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
    boardImage: {
        width: '100%',
        height: '98%', resizeMode: 'center'
    },
    blankView: {
        flex: 1
    },
    buttonView: {
        flex: 5,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    bluebuttonStyle: {
        flexDirection: 'column',
        width: '100%',
        height: '23%',
        alignSelf: 'center',
        backgroundColor: '#013f53',
        borderRadius: 10,
    },
    WhitebuttonStyle: {
        flexDirection: 'column',
        width: '100%',
        height: '23%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    whiteText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15,
        paddingVertical: 15
    },
    blueText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#013f53',
        marginLeft: 15,
        paddingVertical: 15
    }
})