import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MonteseratBold = 'Montserrat-Bold';
const MonteseratRegular = 'Montserrat-Regular';
const MonteseratLight = 'Montserrat-Light';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(15, 0.1),
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: moderateScale(10, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: moderateScale(120, 0.1),
  },
  input: {
    flex: 1,
    marginBottom: moderateScale(20, 0.1),
  },
  inputText: {
    paddingLeft: moderateScale(5, 0.1),
    fontSize: moderateScale(13, 0.1),
    fontFamily: MonteseratRegular,
    lineHeight: moderateScale(18, 0.1),
  },
  item: {
    flex: 1,
    borderRadius: moderateScale(5, 0.1),
    padding: moderateScale(1, 0.1),
    marginTop: moderateScale(15, 0.1),
  },
  gradientView: {
    borderRadius: moderateScale(5, 0.1),
    padding: moderateScale(7, 0.1),
    paddingLeft: moderateScale(20, 0.1),
  },
  pressable: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(7, 0.1),
  },

  menuItem: {
    width: moderateScale(80, 0.1),
  },
  btn: {
    marginTop: moderateScale(40, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(50, 0.1),
    width: moderateScale(145, 0.1),
    height: moderateScale(43, 0.1),
    alignItems: 'center',
  },

  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  btnText: {
    fontSize: moderateScale(16, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
    color: '#fff',
  },
});

export default styles;
