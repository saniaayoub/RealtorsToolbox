import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MonteseratBold = 'Montserrat-Bold';
const MonteseratRegular = 'Montserrat-Regular';
const MonteseratLight = 'Montserrat-Light';

// const MonteseratRegular = 'Montserrat-Regular';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // height: height,
    paddingHorizontal: moderateScale(15, 0.1),
  },
  heading: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: moderateScale(10, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratRegular,
  },
  headingText1: {
    fontSize: moderateScale(20, 0.1),
    fontFamily: MonteseratBold,
  },

  backgroundVideo: {
    width: '100%',
    height: moderateScale(300, 0.1),
  },
});

export default styles;
