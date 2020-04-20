import React, { Component } from 'react';
import { SafeAreaView, View, ImageBackground, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Button, Item, Input, Label } from 'native-base';
import Slideshow from 'react-native-image-slider-show';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: '17th to 19th April PC Lahore',
                    caption: '',
                    //   url: '../assests/img/drawable-xhdpi/craft.png' || '../assests/img/drawable-xxhdpi/craft.png' || '../assests/img/drawable-xxxhdpi/craft.png' || '../assests/img/drawable-hdpi/craft.png' || '../assests/img/drawable-mdpi/craft.png')},
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
                        
                        <Image style={styles.craftImage} source={require('../assests/img/drawable-xhdpi/craft.png' || '../assests/img/drawable-xxhdpi/craft.png' || '../assests/img/drawable-xxxhdpi/craft.png' || '../assests/img/drawable-hdpi/craft.png' || '../assests/img/drawable-mdpi/craft.png')}></Image>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    },
    backImageBox: {
        resizeMode: 'cover',
        width: null,
        height: null
    },
    viewStyle: {
        flex: .5,
        backgroundColor: '#fff'
    },
    view2style: {
        flex: 4.5,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    view3style: {
        flex: 2.5,
        backgroundColor: 'blue',
        justifyContent: 'space-between'
    },
    view4style: {
        flex: 2.5,
        backgroundColor: 'white',
        justifyContent: 'space-evenly'
    },
    craftImage: {
        
        resizeMode: 'stretch',
        width: '100%',
        height: '105%'

    },
    buttonStyle: {
        flexDirection: 'column',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#013f53',
        borderRadius: 25,
    },
    whiteText: {
        alignSelf: "center",
        fontSize: 20,
        color: 'white',
        paddingVertical: 12
    },
    policyText: {
        fontSize: 12,
        alignSelf: 'center'
    },
    caption: {
        fontSize: 17.2,
        color: 'black',
        textAlign: "center",
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
})