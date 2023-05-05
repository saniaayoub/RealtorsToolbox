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
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-around',
  },
  logo: {
    width: 0.5 * width,
    height: 0.4 * height,
  },
  blurContainer: {
    width: 0.8 * width,
    height: 0.3 * height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: 'grey',
    borderWidth: moderateScale(1, 0.1),
    borderRadius: moderateScale(25, 0.1),
    paddingLeft: moderateScale(15, 0.1),
    justifyContent: 'space-around',
  },
  btnText: {
    fontSize: moderateScale(12, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
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

  heading1: {
    fontFamily: MonteseratRegular,
    fontSize: moderateScale(28, 0.1),
    color: '#fff',
  },
  btn: {
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
});

export default styles;
