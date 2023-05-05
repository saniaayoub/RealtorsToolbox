import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MonteseratBold = 'Montserrat-Bold';
const MonteseratRegular = 'Montserrat-Regular';
// const MonteseratRegular = 'Montserrat-Regular';

const styles = StyleSheet.create({
  sav: {
    flex: 1,
    height: '100%',
  },
  backImg: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    paddingHorizontal: moderateScale(15, 0.1),
  },

  blurContainer: {
    // width: 0.8 * width,
    // height: 0.3 * height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: 'grey',
    borderWidth: moderateScale(1, 0.1),
    borderRadius: moderateScale(25, 0.1),
    // paddingLeft: moderateScale(15, 0.1),
    justifyContent: 'space-around',
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingView: {
    marginVertical: moderateScale(50, 0.1),
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
  inputText: {
    color: '#fff',
    fontSize: moderateScale(14, 0.1),
    fontFamily: MonteseratRegular,
  },
  iconCircle: {
    // padding: moderateScale(7, 0.1),
    marginRight: moderateScale(15, 0.1),
    // marginLeft: moderateScale(5, 0.1),
    // marginBottom: moderateScale(5, 0.1),
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
    backgroundColor: '#FFD700',
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
  btnText3: {
    fontFamily: MonteseratBold,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(70, 0.1),
    marginBottom: moderateScale(20, 0.1),
  },
});

export default styles;
