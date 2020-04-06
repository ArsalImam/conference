import React, { Component } from 'react';
import { Text, SafeAreaView, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './AddProfileScreenCss'

export default class AddProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../../Images/drawable-xhdpi/addback.png' || '../../Images/drawable-xxhdpi/addback.png' || '../../Images/drawable-xxxhdpi/addback.png' || '../../Images/drawable-hdpi/addback.png' || '../../Images/drawable-mdpi/addback.png')}>
                        <View style={styles.View1}>
                            <Text style={styles.title}>Add a profile picture</Text>
                        </View>
                        <View style={styles.View2}>
                            <Image style={styles.imageStyle} source={require('../../Images/drawable-xhdpi/addimage.jpg' || '../../Images/drawable-xxhdpi/addimage.jpg' || '../../Images/drawable-xxxhdpi/addimage.jpg' || '../../Images/drawable-hdpi/addimage.jpg' || '../../Images/drawable-mdpi/addimage.jpg')}>
                            </Image>
                        </View>
                        <View style={styles.View3}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('Home')}}>
                                <Text style={styles.whiteText}>ADD A PICTURE</Text>
                            </TouchableOpacity>
                            <Text style={styles.policyText}>By signing up, you agree to our Terms of use and Privacy Policy.</Text>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}

