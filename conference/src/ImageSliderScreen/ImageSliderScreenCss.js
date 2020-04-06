import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        width: '100%',
        height: 400,
        backgroundColor: 'white'
    },
    view2style: {
        flex: 4.5,
        backgroundColor: 'white'
    },
    view3style: {
        flex: 2,
        backgroundColor: 'blue'
    },
    view4style: {
        flex: 3,
        backgroundColor: 'white'
    },
    craftImage: {

        resizeMode: 'stretch',
        width: '100%',
        height: '100%'

    },
    buttonStyle: {
        flexDirection: 'column',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        margin: 40,
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
        marginVertical: 2
    }
})