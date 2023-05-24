import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

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
    marginVertical: moderateScale(18, 0.1),
    marginBottom: moderateScale(15, 0.1),
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: moderateScale(15, 0.1),
    borderTopWidth: moderateScale(1, 0.1),
    borderBottomWidth: moderateScale(1, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
  },
  backColor: {
    marginVertical: moderateScale(20, 0.1),
    paddingVertical: moderateScale(10, 0.1),
    paddingHorizontal: moderateScale(20, 0.1),
    borderRadius: moderateScale(10, 0, 1),
  },
  headingText1: {
    flex: 0.25,
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratLight,
  },
});

export default styles;
