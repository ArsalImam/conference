import React, { Component } from 'react';
import { Text, SafeAreaView, View, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';

const searchbar = () => {
    return(
        <View style={styles.background}>
           <Text>search bar</Text>  

        </View>
    )

}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 12,
        marginVertical: 12,
        borderRadius: 7
    },
    
})

export default searchbar;