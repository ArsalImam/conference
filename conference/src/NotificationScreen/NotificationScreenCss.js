import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backImageBox: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    profileBack: {
        flex: 1,
        width: '100%',
        height: "55%"
    },
    profile: {
        width: '30%',
        height: "36%",
        alignSelf: 'center',
        marginTop: '26%'
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#013f53',
        alignSelf: 'center',
        marginTop: 10

    },
    emailText: {

        fontSize: 20,
        color: '#013f53',
        alignSelf: 'center',
        marginTop: 5
    },
    buttonStyle: {
        flexDirection: 'row',
        width: '85%',
        height: '30%',
        alignSelf: 'center'
    },
    iconStyle: {
        width: 33,
        height: 33
    },
    buttonViewStyle: {
        width: '8%',
        height: 2,
        backgroundColor: '#013f53',
        margin: 15
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#013f53',
        marginLeft: 0
    }
})