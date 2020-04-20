import React, { Component } from 'react';
import { Text, SafeAreaView, View, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class AddProfile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImageBox} source={require('../assests/img/drawable-xhdpi/addback.png' || '../assests/img/drawable-xxhdpi/addback.png' || '../assests/img/drawable-xxxhdpi/addback.png' || '../assests/img/drawable-hdpi/addback.png' || '../assests/img/drawable-mdpi/addback.png')}>
                        <View style={styles.View1}>
                            <Text style={styles.title}>Add a profile picture</Text>
                        </View>
                        <View style={styles.View2}>
                            <Image style={styles.imageStyle} source={require('../assests/img/drawable-xhdpi/addimage.jpg' || '../assests/img/drawable-xxhdpi/addimage.jpg' || '../assests/img/drawable-xxxhdpi/addimage.jpg' || '../assests/img/drawable-hdpi/addimage.jpg' || '../assests/img/drawable-mdpi/addimage.jpg')}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backImageBox: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    View1: {
        flex: 2
    },
    title: {
        alignSelf: 'auto',
        marginHorizontal: 15,
        marginTop: 60,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    View2: {
        flex: 4,
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    imageStyle: {
        marginTop: 30,
        width: '100%',
        height: '100%',
        resizeMode: 'center',
        borderRadius: 10,
    },
    View3: {
        flex: 4,
    },
    buttonStyle: {
        marginTop: '22%',
        alignSelf: 'center',
        flexDirection: 'column',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        margin: 30,
        backgroundColor: '#013f53',
        borderRadius: 25,
    },
    whiteText: {
        alignSelf: "center",
        fontSize: 22,
        color: 'white',
        paddingVertical: 10
    },
    policyText: {
        marginVertical: 20,
        fontSize: 10,
        marginBottom: 1,
        alignSelf: 'center'
    },
})
