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
  tabs: {
    // paddingHorizontal: moderateScale(15, 0.1),
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(20, 0.1),
    // marginBottom: moderateScale(10, 0.1),
  },
  headingText: {
    // paddingBottom: moderateScale(9, 0.1),
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
  },
  newChat: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(2, 0.1),
    borderWidth: moderateScale(1, 0.1),
    position: 'absolute',
    bottom: -3,
    right: -5,
    borderRadius: moderateScale(24 / 2, 0.1),
  },
  textRegular: {
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratBold,
  },
  textSmall: {
    marginTop: moderateScale(5, 0.1),
    fontSize: moderateScale(9, 0.1),
    fontFamily: MonteseratLight,
  },
  bold: {
    fontFamily: MonteseratBold,
  },
  notContainer: {
    // width: '100%',
    flex: 1,
    flexDirection: 'column',
    marginBottom: moderateScale(120, 0.1),
  },
  message: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  not1: {
    // width: '100%',
    paddingVertical: moderateScale(15, 0.1),
    borderBottomWidth: moderateScale(0.5, 0.1),
  },
  dp: {
    marginRight: moderateScale(12, 0.1),
    width: moderateScale(50, 0.1),
    height: moderateScale(50, 0.1),
  },

  description: {
    flexDirection: 'column',
  },
  chatIcon: {
    position: 'absolute',
    right: moderateScale(5, 0.1),
    bottom: moderateScale(10, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
