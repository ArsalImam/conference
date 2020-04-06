import React, { Component } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import { styles } from './ImageSliderScreenCss'

export default class ImageSliderScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: '17th to 19th April PC Lahore',
                    caption: '',
                    //   url: '../../Images/drawable-xhdpi/craft.png' || '../../Images/drawable-xxhdpi/craft.png' || '../../Images/drawable-xxxhdpi/craft.png' || '../../Images/drawable-hdpi/craft.png' || '../../Images/drawable-mdpi/craft.png')},
                }, {
                    title: 'Learn about the Programe',
                    caption: 'View day wise conference schedule and \n speaker profiles',
                    //  url: 'http://placeimg.com/640/480/any',
                }, {
                    title: '',
                    caption: 'Add sessions which you wish to attend \n to your personalize agenda, and get notified.',
                    //url: 'http://placeimg.com/640/480/any',
                },

                {
                    title: '',
                    caption: 'Participate in an app survey and \n get your opinion heard',
                    //url: 'http://placeimg.com/640/480/any',
                },

            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.viewStyle}></View>
                    <View style={styles.view2style}>
                        <Image style={styles.craftImage} source={require('../../Images/drawable-xhdpi/craft.png' || '../../Images/drawable-xxhdpi/craft.png' || '../../Images/drawable-xxxhdpi/craft.png' || '../../Images/drawable-hdpi/craft.png' || '../../Images/drawable-mdpi/craft.png')}></Image>
                    </View>
                    <View style={styles.view3style}>
                        <Slideshow containerStyle={styles.view3style} overlay='true' captionStyle={styles.caption} titleStyle={styles.title} indicatorSelectedColor='#013f53'
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })} />
                    </View>
                    <View style={styles.view4style}>
                        <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => { this.props.navigation.navigate('SignIn') }}>
                            <Text style={styles.whiteText}>START NOW</Text>
                        </TouchableOpacity>
                        <Text style={styles.policyText}>By signing up, you agree to our Terms of use and Privacy Policy.</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}