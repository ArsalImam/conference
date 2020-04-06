import React, { Component, Profiler } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';
import { styles } from './PresidentMsgScreenCss'

export default class PresidentMsgScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/backwithlogo.png' || '../../Images/drawable-xxhdpi/backwithlogo.png' || '../../Images/drawable-xxxhdpi/backwithlogo.png' || '../../Images/drawable-hdpi/backwithlogo.png' || '../../Images/drawable-mdpi/backwithlogo.png')}>
                        <View style={styles.backViewContainer}>

                            <View style={styles.presidentImageView}>
                                <Image style={styles.presidentImage} source={require('../../Images/drawable-xhdpi/president.png' || '../../Images/drawable-xxhdpi/president.png' || '../../Images/drawable-xxxhdpi/president.png' || '../../Images/drawable-hdpi/president.png' || '../../Images/drawable-mdpi/president.png')}></Image>
                            </View>
                            <View style={styles.nameView} >
                                <ImageBackground style={styles.presidentImage} source={require('../../Images/drawable-xhdpi/name.png' || '../../Images/drawable-xxhdpi/name.png' || '../../Images/drawable-xxxhdpi/name.png' || '../../Images/drawable-hdpi/name.png' || '../../Images/drawable-mdpi/name.png')}>
                                    <Text style={styles.nameTitle} >{`Dr. Arshad Chohan\nChairman`}</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.messageView}>
                                <View style={styles.containerBox}>
                                    <ScrollView style={styles.scrollView}>
                                        <Text style={styles.text}>





                                            {`\n \nDear prof/Dr \n \nIt is a matter of great pleasure to write this announcement letter to you related to our 4th conference –titled CRAFT CONFERENCE 2020. This conference is a regular event with splendid participation of both high-grade professionals and practicing doctors from all over the country. The special feature of craft conference is that we take up clinician’s discussion on a large scale on one of the burning issues related to OBS/GYNAE in our country. In the last two conferences, we discussed “injudicious use of Harmone de s in our country” (2016), and problem of recurrent pregnancy loss and public perception about this issue in the Pakistan (اٹھرا)-(2018). In craft conference 2020, we are going to discuss “THE ILL EFFECTS OF DAI (دائی) TREATMENT”. In addition safe Caesarean section and placenta accreta spectrum will be discussed at length. This practice of taking up the national issues has become very popular as it answers multiple queries about all different matters in clinical practice.\n \n Craft conference 2020 will bring a lot more for you to learn to apply in your clinical practice, as this conference focuses upon problems of clinical practice in Pakistan in the light of international knowledge.\n \n `}</Text>
                                    </ScrollView>
                                    <View style={{ height: 7, width: '100%', backgroundColor: '#013f53' }}></View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}
