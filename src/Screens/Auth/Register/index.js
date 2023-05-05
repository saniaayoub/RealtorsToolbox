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

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
);

const Register = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [submitted, setSubmitted] = useState();
  const [showPass, setshowPass] = useState(true);
  const [validEmail, setValidEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const theme = useSelector(state => state.reducer.theme);
  const Textcolor = theme === 'dark' ? '#fff' : '#222222';
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={s.sav}>
      <ImageBackground source={backImg} style={s.backImg}>
        <View>
          <Header />
        </View>

        <View style={s.blurContainer}>
          {/* <LinearGradient
            colors={['#FFC371', '#FF5F6D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}> */}
          <View style={s.inputView}>
            <View style={s.headingView}>
              <Text style={s.heading1}>Sign In</Text>
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
            <View style={s.input}>
              <Input
                w={{
                  base: '83%',
                  md: '25%',
                }}
                variant="underlined"
                InputLeftElement={
                  <View style={[s.iconCircle, {borderColor: Textcolor}]}>
                    <Icon2 name="locked" color={Textcolor} size={18} />
                  </View>
                }
                placeholder="Password"
                placeholderTextColor={Textcolor}
                value={password}
                onChangeText={password => {
                  setPassword(password);
                }}
                InputRightElement={
                  password ? (
                    <View style={s.eye}>
                      <TouchableOpacity onPress={() => setshowPass(!showPass)}>
                        <Feather
                          name={showPass ? 'eye' : 'eye-off'}
                          color={Textcolor}
                          size={20}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <></>
                  )
                }
                style={s.inputText}
                secureTextEntry={showPass}
              />
            </View>
            {submitted && (password == null || password == '') ? (
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
                navigation.navigate('Register');
              }}
              variant={'solid'}
              style={s.btn}>
              <View style={s.btnView}>
                <Text style={s.btnText}>Register</Text>
              </View>
            </Button>

            <Button
              size="md"
              variant={'link'}
              onPressIn={() => navigation.navigate('ForgetPassword')}>
              <Text style={[s.btnText, s.btnText2]}>Forgot Password?</Text>
            </Button>
          </View>

          <Button
            size="sm"
            variant={'link'}
            onPressIn={() => navigation.navigate('Register')}>
            <View style={s.link}>
              <Text style={[s.btnText, s.btnText2]}>
                Don’t Have an Account?
              </Text>
              <Text style={[s.btnText, s.btnText2, s.btnText3]}>
                {' '}
                Sign up Now!
              </Text>
            </View>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;
