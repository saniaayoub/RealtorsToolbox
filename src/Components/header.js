import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
const Header = () => {
  return (
    <View style={{marginVertical: moderateScale(40, 0.1)}}>
      <Icon
        name="leftcircle"
        size={moderateScale(30, 0.1)}
        color={'#fff'}
        solid
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
