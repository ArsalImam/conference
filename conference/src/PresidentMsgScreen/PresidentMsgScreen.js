import React, { Component, Profiler } from 'react';
import { View, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';


export default class PresidentMsgScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' || '../../Images/drawable-mdpi/backwithlogo.png')}>
                    <View style={{
                        alignSelf: 'center', marginHorizontal: 10, marginVertical: 15, borderRadius: 7, borderWidth: 2, borderColor: 'white',
                    }}>



                        <View style={{ flex: 2.7, backgroundColor: 'white' }}>
                            <Image style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../Images/drawable-xhdpi/president.png' || '../../Images/drawable-xxhdpi/president.png' || '../../Images/drawable-xxxhdpi/president.png' || '../../Images/drawable-hdpi/president.png' || '../../Images/drawable-mdpi/president.png')}></Image>
                        </View>
                        <View style={{ flex: 1.3, backgroundColor: 'white' }} >
                            <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../Images/drawable-xhdpi/name.png' || '../../Images/drawable-xxhdpi/name.png' || '../../Images/drawable-xxxhdpi/name.png' || '../../Images/drawable-hdpi/name.png' || '../../Images/drawable-mdpi/name.png')}>
                                <Text style={{ alignContent: 'center', fontSize: 17.7, fontWeight: 'bold', color: 'white', alignSelf: 'center', marginTop: '5%' }} >Dr. Arshad Chohan</Text>
                                <Text style={{ alignContent: 'center', fontSize: 17.7, fontWeight: 'bold', color: 'white', alignSelf: 'center', }} > Chairman</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ flex: 6, backgroundColor: 'white', }}>
                            <View style={styles.containerBox}>
                                <ScrollView style={styles.scrollView}>
                                    <Text style={styles.text}>





                                        {`\n \n Dear prof/Dr \n \n It is a matter of great pleasure to write this announcement letter to you related to our 4th conference –titled CRAFT CONFERENCE 2020. This conference is a regular event with splendid participation of both high-grade professionals and practicing doctors from all over the country. The special feature of craft conference is that we take up clinician’s discussion on a large scale on one of the burning issues related to OBS/GYNAE in our country. In the last two conferences, we discussed “injudicious use of Harmone de s in our country” (2016), and problem of recurrent pregnancy loss and public perception about this issue in the Pakistan (اٹھرا)-(2018). In craft conference 2020, we are going to discuss “THE ILL EFFECTS OF DAI (دائی) TREATMENT”. In addition safe Caesarean section and placenta accreta spectrum will be discussed at length. This practice of taking up the national issues has become very popular as it answers multiple queries about all different matters in clinical practice.\n \n Craft conference 2020 will bring a lot more for you to learn to apply in your clinical practice, as this conference focuses upon problems of clinical practice in Pakistan in the light of international knowledge.\n \n `}</Text>
                                </ScrollView>
                                <View style={{ height: 7, width: '100%', backgroundColor: '#013f53' }}></View>
                            </View>
                        </View>
                    </View>
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
    },
    containerBox: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 1,
    },
    text: {
        marginHorizontal: 22,
        justifyContent: 'center',
        fontSize: 16,
        textAlign: "justify"
    },
})