import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
const Header = props => {
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.goBack();
      }}
      style={{marginVertical: moderateScale(25, 0.1)}}>
      <Icon
        name="leftcircle"
        size={moderateScale(30, 0.1)}
        color={textColor}
        solid
      />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
