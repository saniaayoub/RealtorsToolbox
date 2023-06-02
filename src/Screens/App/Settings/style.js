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
    marginVertical: moderateScale(22, 0.1),
    // marginBottom: moderateScale(20, 0.1),
    borderBottomWidth: moderateScale(1, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    paddingBottom: moderateScale(9, 0.1),
    fontFamily: MonteseratBold,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: moderateScale(120, 0.1),
  },
  input: {
    marginBottom: moderateScale(20, 0.1),
  },
  inputText: {
    paddingLeft: moderateScale(5, 0.1),
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(18, 0.1),
  },
  inputText1: {
    fontSize: moderateScale(15, 0.1),
    fontFamily: MonteseratBold,
    lineHeight: moderateScale(18, 0.1),
  },

  icon: {
    marginRight: moderateScale(10, 0.1),
  },

  switch: {
    width: '100%',
    marginTop: moderateScale(15, 0.1),
    flexDirection: 'row',
    paddingRight: moderateScale(10, 0.1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logout: {
    paddingLeft: moderateScale(25, 0.1),
    fontFamily: MonteseratBold,
    fontSize: moderateScale(15, 0.1),
    color: '#FDBC2C',
  },
  logoutimg: {
    width: moderateScale(20, 0.1),
    height: moderateScale(20, 0.1),
  },
});

export default styles;
