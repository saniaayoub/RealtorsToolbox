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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: moderateScale(10, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    borderColor: '#FDBC2C',
    borderWidth: moderateScale(1, 0.1),
    backgroundColor: 'transparent',
    borderRadius: moderateScale(50, 0.1),
    width: 0.4 * width,
    height: 0.05 * height,
    alignItems: 'center',
  },
  btnText: {
    fontSize: moderateScale(10, 0.1),
    lineHeight: moderateScale(15, 0.1),
    fontFamily: MonteseratBold,
    marginLeft: moderateScale(10, 0.1),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  },

  backImg: {
    width: '100%',
    height: moderateScale(150, 0.1),
    borderRadius: moderateScale(10, 0.1),
  },
  graphView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(100, 0.1),
  },
  graph: {
    width: '100%',
    height: moderateScale(235, 0.1),
  },
});

export default styles;
