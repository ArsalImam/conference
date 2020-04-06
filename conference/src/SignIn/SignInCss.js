import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerbox: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  craftBox: {
    flex: 2.8
  },
  imageCraftBox: {
    flex: 1,
    margin: 20,
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  signinBox: {
    flex: 5.7,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 7,
  },
  imageSignInBox: {
    borderColor: 'black',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 70,
    marginBottom: 40,
    width: '90%',
    height: '100%',
    resizeMode: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    borderRadius: 10

  },
  imageHandle: {
    alignItems: 'flex-start',
    height: '30%',
    width: 1,
    marginTop: 30,
  },
  wilshareBox: {
    flex: 1.5,
    alignItems: 'center'
  },
  imageWilshireBox: {
    flex: 1,
    margin: 10,
    width: '13%',
    height: '15%',
    resizeMode: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  title: {
    width: '60%',
    color: '#013f53',
    fontSize: 12,
    margin: 5,
    textAlign: 'left',
    paddingLeft: 50,
    opacity: 0.9,
  },
  input: {
    width: '60%',
    height: 20,
    fontSize: 12,
    backgroundColor: 'white',
    padding: 3,
    color: '#013f53',
    alignItems: 'center',
    marginLeft: 52,
    marginRight: 25,
  },
  signInText: {
    width: '60%',
    fontSize: 22,
    marginTop: 2,
    marginLeft: 50,
    marginBottom: 12
  },
  toContinueText: {

    flexDirection: 'column',
    fontSize: 15
  },
  buttonContainer: {
    backgroundColor: '#013f53'
  },
  buttonStyle: {
    backgroundColor: '#013f53',
    width: '60%',
    height: 25,
    marginTop: 20,
    marginLeft: 55,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 12,
    padding: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
  },
})