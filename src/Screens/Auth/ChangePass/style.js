import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MonteseratBold = 'Montserrat-Bold';
const MonteseratRegular = 'Montserrat-Regular';
const MonteseratLight = 'Montserrat-Light';

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
    height: height,
    paddingHorizontal: moderateScale(15, 0.1),
  },

  blurContainer: {
    // width: 0.8 * width,
    // height: 0.3 * height,
    marginTop: moderateScale(50, 0.1),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: 'grey',
    borderWidth: moderateScale(1, 0.1),
    borderRadius: moderateScale(25, 0.1),
    // paddingLeft: moderateScale(15, 0.1),
  },
  error: {
    alignSelf: 'flex-start',
    color: 'red',
  },
  headingView: {
    marginVertical: moderateScale(50, 0.1),
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    marginBottom: moderateScale(20, 0.1),
  },
  inputText: {
    color: '#fff',
    fontSize: moderateScale(14, 0.1),
    fontFamily: MonteseratLight,
  },
  iconCircle: {
    marginRight: moderateScale(15, 0.1),
  },
  heading1: {
    fontFamily: MonteseratBold,
    fontSize: moderateScale(28, 0.1),
    color: '#fff',
  },

  btn: {
    marginVertical: moderateScale(50, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(50, 0.1),
    width: moderateScale(145, 0.1),
    height: moderateScale(43, 0.1),
    alignItems: 'center',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
    color: '#fff',
  },
});

export default styles;
