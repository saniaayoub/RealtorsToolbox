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

  text: {
    paddingLeft: moderateScale(5, 0.1),
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(20, 0.1),
  },
});

export default styles;
