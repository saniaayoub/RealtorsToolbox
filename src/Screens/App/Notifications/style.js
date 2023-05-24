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
    paddingHorizontal: moderateScale(12, 0.1),
  },
  tabs: {
    // paddingHorizontal: moderateScale(15, 0.1),
  },
  heading: {
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(20, 0.1),
    marginBottom: moderateScale(10, 0.1),
    borderBottomWidth: moderateScale(1, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
  },
  textRegular: {
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratLight,
  },
  textSmall: {
    marginTop: moderateScale(5, 0.1),
    fontSize: moderateScale(10, 0.1),
    fontFamily: MonteseratLight,
  },
  bold: {
    fontFamily: MonteseratBold,
  },
  notContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: moderateScale(120, 0.1),
  },
  notification: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  not1: {
    width: '100%',
    paddingVertical: moderateScale(15, 0.1),
    borderBottomWidth: moderateScale(0.5, 0.1),
  },
  dp: {
    marginRight: moderateScale(10, 0.1),
    width: moderateScale(50, 0.1),
    height: moderateScale(50, 0.1),
  },

  description: {
    flexDirection: 'column',
  },
});

export default styles;
