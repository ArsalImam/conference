// import React, { Component } from 'react';
// import {ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, StatusBar, View, Image, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

// class SignIn extends Component {
//   render() {
//     return (

//       <KeyboardAvoidingView
//         behavior={Platform.Os == "" ? "padding" : "height"}
//         style={styles.containerbox}
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

//           <SafeAreaView style={styles.containerbox}>
//             <StatusBar barStyle={"light-content"} />

//             <View style={styles.containerbox}>
//               <ImageBackground style={styles.imageContainer}
//                 source={require('../assests/img/drawable-xhdpi/blankback.png' || '../assests/img/drawable-xxhdpi/blankback.png' || '../assests/img/drawable-xxxhdpi/blankback.png' || '../assests/img/drawable-hdpi/blankback.png' || '../assests/img/drawable-mdpi/blankback.png')}>
//                 <View style={styles.extaView}></View>
//                 <View style={styles.craftBox}>
//                   <View style={{ width: '50%', height: '80%'}}>
//                     <Image style={styles.imageCraftBox}
//                       source={require('../assests/img/drawable-xhdpi/logo.png' || '../assests/img/drawable-xxhdpi/logo.png' || '../assests/img/drawable-xxxhdpi/logo.png' || '../assests/img/drawable-hdpi/logo.png' || '../assests/img/drawable-mdpi/logo.png')}>
//                     </Image>
//                   </View>

//                 </View>
//                 <View style={styles.signinBox}>
//                   <View style = {{ flex: 1,  width: '88%', height: '80%', backgroundColor: 'red' }}>
//                   <ImageBackground style={styles.imageSignInBox} source={require('../assests/img/drawable-xhdpi/handleback.png' || '../assests/img/drawable-xxhdpi/handleback.png' || '../assests/img/drawable-xxxhdpi/handleback.png' || '../assests/img/drawable-hdpi/handleback.png' || '../assests/img/drawable-mdpi/handleback.png')}>
//                     <Text style={styles.signInText}>Sign In</Text>

//                     <Text style={styles.title}>Name</Text>
//                     <TextInput style={styles.input}
//                       placeholder="Enter your Name"
//                       returnKeyType='next'
//                       autoCorrect={false}
//                     />
//                     <Text style={styles.title}>Email</Text>
//                     <TextInput style={styles.input}
//                       placeholder="Enter your email"
//                       keyboardType='email-address'
//                       returnKeyType='next'
//                       autoCorrect={false}
//                     />
//                     <Text style={styles.title}>Designation</Text>
//                     <TextInput style={styles.input}
//                       placeholder="Enter your designation"
//                       returnKeyType='next'
//                       autoCorrect={false}
//                     />
//                     <Text style={styles.title}>City</Text>
//                     <TextInput style={styles.input}
//                       placeholder="Enter your City"
//                       returnKeyType='next'
//                       autoCorrect={false}
//                     />
//                     <Text style={styles.title}>Institute</Text>
//                     <TextInput style={styles.input}
//                       placeholder="Enter your Institute"
//                       returnKeyType='next'
//                       autoCorrect={false}
//                     />
//                     <Text style={styles.title}>Contact</Text>
//                     <TextInput style={styles.input}
//                       placeholder="Enter your Contact Number"
//                       keyboardType='phone-number'
//                       returnKeyType='next'
//                       autoCorrect={false}
//                     />

//                     <TouchableOpacity style={styles.buttonStyle}
//                       onPress={() => { this.props.navigation.navigate('VerifyUser') }}>
//                       <Text style={styles.buttonTitle}>Submit</Text>
//                     </TouchableOpacity>
//                   </ImageBackground>
//                   </View>
//                 </View>
//                 <View style={styles.wilshareBox}>
//                   <Image style={styles.imageWilshireBox}
//                     source={require('../assests/img/drawable-xhdpi/wilshire.png' || '../assests/img/drawable-xxhdpi/wilshire.png' || '../assests/img/drawable-xxxhdpi/wilshire.png' || '../assests/img/drawable-hdpi/wilshire.png' || '../assests/img/drawable-mdpi/wilshire.png')}>
//                   </Image>
//                 </View>
//               </ImageBackground>
//             </View>
//           </SafeAreaView>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   containerbox: {
//     flex: 1,
//   },
//   imageContainer: {
//     flex: 1,
//     resizeMode: 'cover',
//     width: null,
//     height: null
//   },
//   craftBox: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   imageCraftBox: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'stretch'
//   },
//   signinBox: {
//     flex: 5.5,
//     alignItems: 'center'
//   },
//   imageSignInBox: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'center',
//   },
//   wilshareBox: {
//     flex: 0.5,
//     alignItems: 'center'
//   },
//   imageWilshireBox: {
//     flex: 1,
//     margin: 10,
//     width: '13%',
//     height: '15%',
//     resizeMode: 'center',
//     alignSelf: 'center',
//   },
//   title: {
//     color: '#013f53',
//     fontSize: 12,
//   },
//   input: {
//     color: '#013f53',
//     alignItems: 'center',
//   },
//   signInText: {
//     fontSize: 22,
//   },
//   toContinueText: {
//     flexDirection: 'column',
//     fontSize: 15
//   },
//   buttonContainer: {
//     backgroundColor: '#013f53'
//   },
//   buttonStyle: {
//     backgroundColor: '#013f53',
//     width: '60%',
//     height: 25,
//     marginTop: 20,
//     marginLeft: 55,
//   },
//   buttonTitle: {
//     color: 'white',
//     fontSize: 12,
//     padding: 3,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     alignContent: 'center',
//   },
// })

// export default SignIn;