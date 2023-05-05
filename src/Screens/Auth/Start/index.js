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
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backImg from '../../../assets/images/png/backImg1.png';
import logo from '../../../assets/images/png/logo.png';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const StartScreen = ({navigation}) => {
  const theme = useSelector(state => state.reducer.theme);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={s.sav}>
      <ImageBackground source={backImg} style={s.backImg}>
        <View>
          <Image source={logo} resizeMode={'contain'} style={s.logo} />
        </View>

        <View style={s.blurContainer}>
          {/* <LinearGradient
            colors={['#FFC371', '#FF5F6D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}> */}
          <Text style={s.heading1}>Dream. Learn. Do</Text>
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
          {/* </LinearGradient> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartScreen;
