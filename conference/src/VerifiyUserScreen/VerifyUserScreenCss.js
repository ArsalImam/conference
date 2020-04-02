import { StyleSheet } from 'react-native';


export const  styles = StyleSheet.create({
    Container: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20%',
    },
    backImageContainer: {
      flex: 1,
      resizeMode: 'stretch',
      width: null,
      height: null

      
    },
    buttonStyle: {
      
      backgroundColor: '#013f53',
      width: '88%',
      height: '8%',
      marginTop: '7%',
    },
    buttonTitle: {
      flex: 1,
      color: 'white',
      fontSize: 15,
      padding: 7,
      textAlign: 'center',
      alignContent: 'stretch'
  
    },
    labelStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: '0.8%',
    }
})
