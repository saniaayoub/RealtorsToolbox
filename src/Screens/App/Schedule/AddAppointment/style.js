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
    flex: 1,
},
item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
},
  heading: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: moderateScale(15, 0.1),
  },
  headingText: {
    fontSize: moderateScale(18, 0.1),
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
  inputContainerStyle: {
    paddingVertical: moderateScale(15, 0.1),
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  pressable: {
    flexDirection: 'row',
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    marginBottom: moderateScale(15, 0.1),
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
  radioInput: {
    marginTop: moderateScale(15, 0.1),
    marginBottom: moderateScale(25, 0.1),
    paddingLeft: moderateScale(2, 0.1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
  },
  btn: {
    marginTop: moderateScale(40, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(50, 0.1),
    width: moderateScale(145, 0.1),
    height: moderateScale(43, 0.1),
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  btnText: {
    fontSize: moderateScale(16, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
    color: '#fff',
  },
  description: {
    borderWidth: moderateScale(1, 0.1),
    borderColor: '#d3d3d3',
    borderRadius: moderateScale(5, 0.1),
    paddingHorizontal: moderateScale(15, 0.1),
    paddingTop: moderateScale(15, 0.1),
  },
  textArea: {
    marginLeft: moderateScale(5, 0.1),
    fontSize: moderateScale(14, 0.1),
  },
  dateInput: {
    borderBottomColor: '#d3d3d3',
    justifyContent: 'flex-start',
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
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
