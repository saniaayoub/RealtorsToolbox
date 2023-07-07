import {ImageBackground, SafeAreaView, View, Text, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import s from './style';
import {Input, Button, Modal} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backImg from '../../../assets/images/Himg.jpg';
import logo from '../../../assets/images/png/logo.png';
import Icon from 'react-native-vector-icons/AntDesign';
import BlurredView from '../../../Components/BlurredView';

const StartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={s.sav}>
      <ImageBackground source={backImg} style={s.backImg}>
        <View style={s.overlay} />
        <View>
          <Image source={logo} resizeMode={'contain'} style={s.logo} />
        </View>
        <BlurredView
          w={0.8}
          h={0.3}
          customStyle={{
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
                await AsyncStorage.setItem('userExist', 'old');
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
        </BlurredView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartScreen;
