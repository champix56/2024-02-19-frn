import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  FiltrableCarList: {
    height: Dimensions.get('window').height - 130,
  },
  header: {textAlign: 'center', fontSize: 20},
  scroll: {
    paddingTop: 2,
    backgroundColor: '#D5E0E5',
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
  },
  centerContainer: {flexGrow: 1},
});
export default styles;
