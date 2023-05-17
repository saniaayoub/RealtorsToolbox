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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingVertical: moderateScale(10, 0.1),
  },
  headingText: {
    marginTop: moderateScale(10, 0.1),
    fontSize: moderateScale(20, 0.1),
    fontFamily: MonteseratBold,
    lineHeight: moderateScale(22, 0.1),
  },
  textRegular: {
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(22, 0.1),
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: moderateScale(120, 0.1),
  },
  input: {
    marginBottom: moderateScale(20, 0.1),
  },
  inputText: {
    paddingLeft: moderateScale(5, 0.1),
    fontSize: moderateScale(13, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(18, 0.1),
  },

  icon: {
    marginRight: moderateScale(10, 0.1),
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(22, 0.1),
    height: moderateScale(22, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(22 / 2, 0.1),
  },

  radioInput: {
    marginTop: moderateScale(15, 0.1),
    marginBottom: moderateScale(25, 0.1),
    paddingLeft: moderateScale(2, 0.1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
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
  edit: {
    width: moderateScale(18, 0.1),
    height: moderateScale(18, 0.1),
    borderRadius: moderateScale(18 / 2, 0.1),
    // padding: moderateScale(5, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: moderateScale(1, 0.1),
  },
  dp: {
    marginVertical: moderateScale(10, 0.1),
    width: moderateScale(75, 0.1),
    height: moderateScale(75, 0.1),
    borderRadius: moderateScale(75 / 2, 0.1),
  },
});

export default styles;
