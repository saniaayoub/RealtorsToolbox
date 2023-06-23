import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MonteseratBold = 'Montserrat-Bold';
const MonteseratRegular = 'Montserrat-Regular';
const MonteseratLight = 'Montserrat-Light';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: moderateScale(15, 0.1),
  },
  heading: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(10, 0.1),
  },
  mB: {
    marginBottom: moderateScale(15, 0.1),
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
    marginVertical: moderateScale(15, 0.1),
    position: 'relative',
    borderRadius: 20,
    overFlow: 'hidden',
  },
  videos: {
    marginBottom: moderateScale(170, 0.1),
  },
  video: {
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#000',
    borderRadius: moderateScale(14, 0.1),
  },
  dhouse: {
    position: 'absolute',
    padding: moderateScale(15, 0.1),
    top: moderateScale(5, 0.1),
  },
  caption: {
    fontSize: moderateScale(11, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(16, 0.1),
    marginBottom: moderateScale(5, 0.1),
  },
  datePosted: {
    fontSize: moderateScale(11, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(16, 0.1),
    color: '#B6B6B6',
  },
  heart: {
    position: 'absolute',
    // alignItems: 'center',
    right: moderateScale(20, 0.1),
    top: moderateScale(22, 0.1),
    width: moderateScale(30, 0.1),
    height: moderateScale(30, 0.1),
    backgroundColor: '#fff',
    borderRadius: moderateScale(40 / 2, 0.1),

    // alignItems: 'center',
  },
  heartIcon: {
    // position: 'absolute',
    width: moderateScale(30, 0.1),
    height: moderateScale(30, 0.1),
    alignItems: 'center',

    // marginLeft: moderateScale(-6, 0.1),
    // justifyContent: 'flex-start',
  },
  postText: {
    position: 'absolute',
    bottom: moderateScale(-90, 0.1),
    right: moderateScale(-50, 0.1),
  },
  share: {
    position: 'absolute',
    // alignItems: 'center',
    right: moderateScale(55, 0.1),
    top: moderateScale(22, 0.1),
    width: moderateScale(30, 0.1),
    height: moderateScale(30, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(40 / 2, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default styles;
