import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Easing,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backImg from '../../../assets/images/png/backImg3.png';
import logo from '../../../assets/images/png/logo.png';
// import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {BlurView} from '@react-native-community/blur';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
);

const ForgetPass = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [submitted, setSubmitted] = useState();
  const [showPass, setshowPass] = useState(true);
  const [validEmail, setValidEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const theme = useSelector(state => state.reducer.theme);
  const Textcolor = '#fff';
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={backImg} style={s.backImg}>
        <View>
          <Header navigation={navigation} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <BlurView
            blurAmount={15}
            blurType="light"
            style={{
              width: 0.9 * width,
              height: 0.6 * height,
              borderColor: 'grey',
              borderWidth: moderateScale(1, 0.1),
              borderRadius: moderateScale(25, 0.1),
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={110}
              style={{
                width: 0.9 * width,
                height: 0.6 * height,
                borderColor: 'gray',
                borderWidth: 2,
                borderRadius: 25,
              }}>
              {/* <View style={s.blurContainer}> */}
              <View style={s.inputView}>
                <View style={s.headingView}>
                  <Text style={s.heading1}>Forget Password</Text>
                </View>
                <View style={s.input}>
                  <Input
                    w={{
                      base: '83%',
                      md: '25%',
                    }}
                    variant="underlined"
                    InputLeftElement={
                      <View style={s.iconCircle}>
                        <Icon name={'envelope'} color={Textcolor} size={18} />
                      </View>
                    }
                    placeholder="Email Address"
                    placeholderTextColor={Textcolor}
                    value={email}
                    keyboardType="email-address"
                    onChangeText={email => {
                      setEmail(email);
                      let valid = emailReg.test(email);
                    }}
                    style={s.inputText}
                  />
                </View>
                {submitted && (email == null || email == '') ? (
                  <>
                    <View
                      style={{
                        alignSelf: 'flex-end',
                        marginRight: moderateScale(35, 0.1),
                      }}>
                      <Text
                        style={{
                          color: 'red',
                        }}>
                        Required
                      </Text>
                    </View>
                  </>
                ) : null}

                <Button
                  size="sm"
                  onPressIn={async () => {
                    navigation.navigate('ChangePass');
                  }}
                  variant={'solid'}
                  style={s.btn}>
                  <View style={s.btnView}>
                    <Text style={s.btnText}>Send</Text>
                  </View>
                </Button>
              </View>
              {/* </View> */}
            </LinearGradient>
          </BlurView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ForgetPass;
