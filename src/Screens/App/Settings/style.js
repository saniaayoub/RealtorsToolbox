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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: moderateScale(15, 0.1),
    marginVertical: moderateScale(5, 0.1),
    borderRadius: moderateScale(5, 0.1),
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
    width: '85%',
    fontSize: moderateScale(10, 0.1),
    lineHeight: moderateScale(16, 0.1),
    fontFamily: MonteseratBold,
  },

  faqContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: moderateScale(120, 0.1),
  },
});

export default styles;
