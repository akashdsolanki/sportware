import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SCREEN_WIDTH = width - 20;
const SCREEN_WIDTH2 = width - 60;


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  basicContainer: {
    zIndex: 999,
    flex: 1,
    backgroundColor: '#FFF',
  },
  countryInfo: {
    marginHorizontal: 16,
    paddingHorizontal: 15,
    backgroundColor: '#DDD',
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#f7f7f7',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#000',
    fontFamily: 'Karla-Bold',
    letterSpacing: 1.2,
    fontSize: 16,
    height: 50
  },
});
