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
    marginTop: moderateScale(-10, 0.1),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: 'grey',
    borderWidth: moderateScale(1, 0.1),
    borderRadius: moderateScale(25, 0.1),
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingView: {
    marginVertical: moderateScale(40, 0.1),
  },
  btnText: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratRegular,
    color: '#fff',
  },
  roundIcon: {
    backgroundColor: '#fff',
    width: moderateScale(30, 0.1),
    height: moderateScale(30, 0.1),
    borderRadius: moderateScale(30 / 2, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(25, 0.1),
  },
  input: {
    marginBottom: moderateScale(20, 0.1),
  },
  inputContainerStyle: {
    width: '84%',
    paddingVertical: moderateScale(10, 0.1),
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
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
  btnText2: {
    fontSize: moderateScale(11, 0.1),
  },
  btn: {
    marginTop: moderateScale(50, 0.1),
    marginBottom: moderateScale(30, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(50, 0.1),
    width: moderateScale(145, 0.1),
    height: moderateScale(43, 0.1),
    alignItems: 'center',
  },
  btnView: {
    flexDirection: 'row',
  },
  radioInput: {
    marginTop: moderateScale(15, 0.1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
  },
});

export default styles;
