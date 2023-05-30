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
    flex: 1,
    // height: height,
    paddingHorizontal: moderateScale(15, 0.1),
  },
  heading: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15, 0.1),
  },
  headingText: {
    fontSize: moderateScale(12, 0.1),
    fontFamily: MonteseratBold,
    marginLeft: moderateScale(10, 0.1),
  },
  headingText1: {
    fontSize: moderateScale(20, 0.1),
    fontFamily: MonteseratBold,
  },
  userTitle: {
    fontSize: moderateScale(15, 0.1),
    fontFamily: MonteseratBold,
    marginLeft: moderateScale(10, 0.1),
    lineHeight: moderateScale(20, 0.1),
  },
  row: {
    flexDirection: 'row',
  },
  col1: {
    flex: 0.5,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(6, 0.1),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: moderateScale(150, 0.1),
    height: moderateScale(240, 0.1),
  },
  book: {width: '100%', height: '100%'},
  bookTitle: {
    // justifyContent: 'flex-start',
    marginTop: moderateScale(20, 0.1),
  },
  backgroundVideo: {
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(300, 0.1),
    borderRadius: moderateScale(14, 0.1),
    marginVertical: moderateScale(15, 0.1),
  },
  videos: {
    marginBottom: moderateScale(170, 0.1),
  },
  video: {
    width: '100%',
    zIndex: 100,
    height: moderateScale(300, 0.1),
  },
  caption: {
    width: '95%',
    fontSize: moderateScale(9, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(16, 0.1),
    marginBottom: moderateScale(5, 0.1),
  },
  datePosted: {
    fontSize: moderateScale(9, 0.1),
    fontFamily: MonteseratLight,
    lineHeight: moderateScale(16, 0.1),
    color: '#B6B6B6',
    marginLeft: moderateScale(10, 0.1),
  },
  heart: {
    width: moderateScale(30, 0.1),
    height: moderateScale(30, 0.1),
    backgroundColor: '#fff',
    borderRadius: moderateScale(40 / 2, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(-10, 0.1),
  },
  heartIcon: {
    position: 'absolute',
    marginLeft: moderateScale(-10, 0.1),
  },
  postText: {
    position: 'absolute',
    bottom: moderateScale(-90, 0.1),
    right: moderateScale(-50, 0.1),
  },
  icons: {
    // top: moderateScale(7, 0.1),
    // marginLeft: moderateScale(-10, 0.1),
    // alignItems: 'center',
    justifyContent: 'center',
  },
  share: {
    width: moderateScale(33, 0.1),
    height: moderateScale(33, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(40 / 2, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: moderateScale(5, 0.1),
    // marginVertical: moderateScale(10, 0.1),
    height: moderateScale(300, 0.1),
    borderRadius: moderateScale(25, 0.1),
  },
  gradientView: {
    height: '98%',
    width: '99%',
    paddingLeft: moderateScale(10, 0.1),
    paddingVertical: moderateScale(10, 0.1),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: moderateScale(25, 0.1),
  },
  input: {
    // alignItems: 'center',
    marginLeft: moderateScale(20, 0.1),
    width: '100%',
  },
  inputArea: {
    marginLeft: moderateScale(10, 0.1),
    marginTop: moderateScale(10, 0.1),
  },
  send: {
    marginTop: moderateScale(60, 0.1),
    marginRight: moderateScale(10, 0.1),
  },
});

export default styles;
