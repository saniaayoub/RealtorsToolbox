import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';

import {AppContext, useAppContext} from '../Context/AppContext';

const Header = props => {
  const {token, theme, setToken} = useAppContext(AppContext);
  const [loader, setLoader] = useState(true);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.goBack();
      }}
      style={{
        width: moderateScale(30, 0.1),
        marginVertical: moderateScale(25, 0.1),
      }}>
      <Icon
        name="leftcircle"
        size={moderateScale(30, 0.1)}
        color={token ? textColor : '#fff'}
        solid
      />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
