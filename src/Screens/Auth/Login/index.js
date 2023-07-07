import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backImg from '../../../assets/images/png/backImg3.png';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';
import BlurredView from '../../../Components/BlurredView';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import {postApi} from '../../../APIs';
import Loader from '../../../Components/Loader';
import {validateEmail} from '../../../Constants';

const Login = ({navigation}) => {
  const {setLoader, loader, setToken} = useAppContext(AppContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPass, setshowPass] = useState(true);
  const [onsubmit, setOnSubmit] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    getEmail();
  }, []);

  const getEmail = async () => {
    let email = await AsyncStorage.getItem('email');
    if (email) {
      setEmail(email);
      setIsEmailValid(true);
    }
  };

  const validate = () => {
    setOnSubmit(true);
    if (!email || !password || !isEmailValid) {
      return;
    } else {
      login();
    }
  };

  const login = async () => {
    setLoader(true);
    Keyboard.dismiss();
    const form = {
      email: email,
      password: password,
    };
    const res = await postApi('auth/login', form);
    // console.log(res);
    if (res?.token) {
      setToken(res?.token);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('userToken', res?.token);
      // Alert.alert('')
    } else {
      Alert.alert(res?.data?.error);
      setPassword('');
    }
    setLoader(false);
    setOnSubmit(false);
  };

  return (
    <View>
      {loader ? <Loader /> : null}
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={backImg} style={s.backImg}>
          <View style={{marginTop: moderateScale(80, 0.1)}}>
            {/* <Header navigation={navigation} /> */}
          </View>
          <View style={{justifyContent: 'center'}}>
            <BlurredView w={0.9} h={0.75}>
              <>
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
                          <Icon name={'envelope'} color={'#fff'} size={18} />
                        </View>
                      }
                      placeholder="Email Address"
                      placeholderTextColor={'#fff'}
                      value={email}
                      keyboardType="email-address"
                      onChangeText={email => {
                        setEmail(email);
                        validateEmail(email, setIsEmailValid);
                      }}
                      style={s.inputText}
                    />
                    {onsubmit && !email ? (
                      <Text style={s.error}>* Required </Text>
                    ) : email && !isEmailValid ? (
                      <Text style={s.error}>Please enter a valid email</Text>
                    ) : null}
                  </View>

                  <View style={s.input}>
                    <Input
                      w={{
                        base: '83%',
                        md: '25%',
                      }}
                      variant="underlined"
                      InputLeftElement={
                        <View style={[s.iconCircle, {borderColor: '#fff'}]}>
                          <Icon2 name="locked" color={'#fff'} size={18} />
                        </View>
                      }
                      placeholder="Password"
                      placeholderTextColor={'#fff'}
                      value={password}
                      onChangeText={password => {
                        setPassword(password);
                      }}
                      InputRightElement={
                        password ? (
                          <View style={s.eye}>
                            <TouchableOpacity
                              onPress={() => setshowPass(!showPass)}>
                              <Feather
                                name={showPass ? 'eye' : 'eye-off'}
                                color={'#fff'}
                                size={moderateScale(20, 0.1)}
                              />
                            </TouchableOpacity>
                          </View>
                        ) : null
                      }
                      style={s.inputText}
                      secureTextEntry={showPass}
                    />
                    {onsubmit && !password ? (
                      <Text style={s.error}> * Required</Text>
                    ) : null}
                  </View>

                  <Button
                    size="sm"
                    onPressIn={async () => {
                      validate();
                    }}
                    variant={'solid'}
                    style={s.btn}>
                    <View style={s.btnView}>
                      <Text style={s.btnText}>Login</Text>
                    </View>
                  </Button>

                  <Button
                    size="md"
                    variant={'link'}
                    onPressIn={() => navigation.navigate('ForgetPass')}>
                    <Text style={[s.btnText, s.btnText2, s.btnText3]}>
                      Forgot Password?
                    </Text>
                  </Button>
                </View>
                <Button
                  size="sm"
                  variant={'link'}
                  onPressIn={() => navigation.navigate('Register')}>
                  <View style={[s.link]}>
                    <Text style={[s.btnText, s.btnText2]}>
                      Don’t Have an Account?
                    </Text>
                    <Text style={[s.btnText, s.btnText2, s.btnText3]}>
                      {' '}
                      Sign up Now!
                    </Text>
                  </View>
                </Button>
              </>
            </BlurredView>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Login;
