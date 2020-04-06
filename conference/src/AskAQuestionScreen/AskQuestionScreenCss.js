import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backImageBox: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    View1: {
        flex: 1,
        margin: 12
    },
    View2: {
        margin: 12,
        flex: 3.5,
        borderRadius: 7       
    },
    boardImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'center'
    },
    View3: {
        flex: 6.5  
    },
    nameText: {
        marginTop: 25,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0d6cc3',
        marginLeft: '20%',
    },
    input: {
        fontSize: 17,
        color: '#333333',
        marginLeft: '20%',
        textAlign: 'justify',
    },
    buttonStyle: {
        flexDirection: 'column',
        width: '50%',
        height: 35,
        alignSelf: 'flex-end',
        margin: 30,
        backgroundColor: '#013f53',
        borderRadius: 5,  
    },
    buttonText: {
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 6
    },
})