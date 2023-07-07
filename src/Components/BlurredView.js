import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import {height, width} from '../Constants';

const BlurredView = ({children, w, h, customStyle}) => {
  return (
    <BlurView
      blurAmount={15}
      blurType="light"
      style={{
        width: w * width,
        height: h * height,
        borderColor: 'grey',
        backgroundColor: 'transparent',
        borderWidth: moderateScale(1, 0.1),
        borderRadius: moderateScale(25, 0.1),
        alignSelf: 'center',
      }}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        useAngle
        angle={110}
        style={[
          {
            width: w * width,
            height: h * height,
            borderColor: 'grey',
            borderWidth: 2,
            borderRadius: 25,
          },
          customStyle,
        ]}>
        {children}
      </LinearGradient>
    </BlurView>
  );
};

export default BlurredView;

const styles = StyleSheet.create({});
