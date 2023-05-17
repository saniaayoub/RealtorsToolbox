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
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(20, 0.1),
    marginBottom: moderateScale(20, 0.1),
    borderBottomWidth: moderateScale(1, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: moderateScale(10, 0.1),
  },
  input: {
    marginBottom: moderateScale(20, 0.1),
  },
  inputText: {
    color: '#fff',
    fontSize: moderateScale(15, 0.1),
    fontFamily: MonteseratLight,
  },
  iconCircle: {
    marginRight: moderateScale(25, 0.1),
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: moderateScale(16, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
    color: '#fff',
  },
});

export default styles;
