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
    width: 0.5 * width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottomWidth: moderateScale(1, 0.1),
    paddingBottom: moderateScale(10, 0.1),
    marginBottom: moderateScale(10, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratRegular,
  },
  headingText1: {
    fontSize: moderateScale(20, 0.1),
    fontFamily: MonteseratBold,
  },

  btnText: {
    fontSize: moderateScale(9, 0.1),
    lineHeight: moderateScale(14, 0.1),
    fontFamily: MonteseratLight,
    marginBottom: moderateScale(10, 0.1),
  },
  btnText1: {
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratLight,
  },
  backImg: {
    width: '100%',
    height: moderateScale(150, 0.1),
    borderRadius: moderateScale(10, 0.1),
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: moderateScale(10, 0.1),
  },
  item: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(5, 0.1),
    marginVertical: moderateScale(10, 0.1),
    height: moderateScale(80),
    borderRadius: moderateScale(10, 0.1),
  },
  buttonText: {
    height: '93%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10, 0.1),
  },
  graphView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(100, 0.1),
    // width: '95%',
  },
  graph: {
    width: '100%',
    height: moderateScale(235, 0.1),
  },
  dartView: {
    backgroundColor: '#fff',
    width: moderateScale(40, 0.1),
    height: moderateScale(40, 0.1),

    borderRadius: moderateScale(40 / 2, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: moderateScale(10, 0.1),
    top: moderateScale(10, 0.1),
  },
  dart: {
    width: moderateScale(20, 0.1),
    height: moderateScale(20, 0.1),
  },
  dartText: {
    // marginTop: moderateScale(, 0.1),
    fontSize: moderateScale(6, 0.1),
    color: '#000',
    fontFamily: MonteseratBold,
  },
});

export default styles;
