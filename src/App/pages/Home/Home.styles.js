import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Home: {paddingTop: 40},
  titre: {
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  centerImageView: {alignItems: 'center'},
  centerImage: {
    height: 200,
    width: 200,
  },
  buttons: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {width: 150},
  buttonView: {flexDirection: 'row', alignItems: 'center'},
  buttonImage: {height: 32, width: 32},
});
export default styles;
