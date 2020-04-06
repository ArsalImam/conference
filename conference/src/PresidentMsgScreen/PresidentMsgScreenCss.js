import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backImageBox: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null
    },
    backViewContainer: {
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'white'
    },
    presidentImageView: {
        flex: 2.7,
        backgroundColor: 'white'
    },
    presidentImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    nameView: {
        flex: 1,
        backgroundColor: 'white'
    },
    messageView: {
        flex: 6.3,
        backgroundColor: 'white',
    },
    scrollView: {
        marginHorizontal: 1,
    },
    text: {
        marginHorizontal: 22,
        justifyContent: 'center',
        fontSize: 15,
        textAlign: "justify"
    },
    nameTitle: {
        alignContent: 'center',
        fontSize: 17.7,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 7,
        alignSelf: 'center',
        textAlign: 'center'
    }

})