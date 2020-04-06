import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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