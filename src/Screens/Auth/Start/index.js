import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Easing,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {Input, Button, Modal} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backImg from '../../../assets/images/Himg.jpg';
import logo from '../../../assets/images/png/logo.png';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

const StartScreen = ({navigation}) => {
  const theme = useSelector(state => state.reducer.theme);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <SafeAreaView style={s.sav}>
      <ImageBackground source={backImg} style={s.backImg}>
        <View style={s.overlay} />
        <View>
          <Image source={logo} resizeMode={'contain'} style={s.logo} />
        </View>
        <View style={{}}>
          <BlurView
            blurAmount={15}
            blurType="light"
            style={{
              width: 0.8 * width,
              height: 0.3 * height,

              borderColor: 'grey',
              borderWidth: moderateScale(1, 0.1),
              borderRadius: moderateScale(25, 0.1),
              // paddingLeft: moderateScale(15, 0.1),
              // justifyContent: 'space-around',
              // alignContent: 'flex-start',
              // alignItems: 'center',
            }}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={110}
              style={{
                width: 0.8 * width,
                height: 0.3 * height,
                borderColor: 'gray',
                borderWidth: 2,
                borderRadius: 25,
                justifyContent: 'space-between',
                paddingVertical: moderateScale(22, 0.1),
                paddingHorizontal: moderateScale(22, 0.1),
              }}>
              <View>
                <Text style={s.heading1}>Dream</Text>
                <Text style={s.heading1}>Learn Do</Text>
              </View>
              <View
                style={{
                  paddingBottom: moderateScale(12, 0.1),
                }}>
                <Button
                  size="sm"
                  onPressIn={async () => {
                    navigation.navigate('Login');
                  }}
                  variant={'solid'}
                  style={s.btn}>
                  <View style={s.btnView}>
                    <Text style={s.btnText}>Get Started</Text>
                    <View style={s.roundIcon}>
                      <Icon
                        name="arrowright"
                        size={moderateScale(20, 0.1)}
                        color={'#000'}
                      />
                    </View>
                  </View>
                </Button>
              </View>
            </LinearGradient>
          </BlurView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartScreen;
