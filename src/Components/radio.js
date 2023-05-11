import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
const InterMedium = 'Montserrat-Light';

const radio = ({onPress, selected, children}) => {
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.radioButtonText, {color: textColor}]}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default radio;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: moderateScale(5, 0.1),
    // marginHorizontal: moderateScale(20, 0.1),
  },
  radioButton: {
    height: moderateScale(18, 0.1),
    width: moderateScale(18, 0.1),
    backgroundColor: '#fff',
    borderRadius: moderateScale(10, 0.1),
    borderWidth: moderateScale(1, 0.1),
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: moderateScale(11, 0.1),
    width: moderateScale(11, 0.1),
    borderRadius: moderateScale(7, 0.1),
    backgroundColor: '#FDBC2C',
  },
  radioButtonText: {
    marginTop: moderateScale(3, 0.1),
    color: '#fff',
    fontSize: moderateScale(13, 0.1),
    fontFamily: InterMedium,
    marginLeft: moderateScale(7, 0.1),
  },
});
