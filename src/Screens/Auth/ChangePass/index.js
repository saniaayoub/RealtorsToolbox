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
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
);

const ChangePass = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfPass] = useState(true);
  const [submitted, setSubmitted] = useState();
  const [loader, setLoader] = useState(false);
  const theme = useSelector(state => state.reducer.theme);
  const showToast = msg => {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  };
  const color = theme === 'dark' ? '#222222' : '#fff';
  const Textcolor = theme === 'dark' ? '#fff' : '#222222';
  const userToken = useSelector(state => state.reducer.userToken);
  useEffect(() => {}, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={backImg} style={s.backImg}>
        <View>
          <Header navigation={navigation} />
        </View>

        <View style={s.blurContainer}>
          {/* <LinearGradient
            colors={['#FFC371', '#FF5F6D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}> */}
          <View style={s.inputView}>
            <View style={s.headingView}>
              <Text style={s.heading1}>Chane Password</Text>
            </View>
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
                placeholder="New Password"
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
                placeholder="Confirm Password"
                placeholderTextColor={Textcolor}
                value={confirmPassword}
                onChangeText={password => {
                  setConfirmPassword(password);
                }}
                InputRightElement={
                  confirmPassword ? (
                    <View style={s.eye}>
                      <TouchableOpacity
                        onPress={() => setShowConfPass(!showConfPass)}>
                        <Feather
                          name={showConfPass ? 'eye' : 'eye-off'}
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
                secureTextEntry={showConfPass}
              />
            </View>
            {submitted && (confirmPassword == null || confirmPassword == '') ? (
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
                navigation.navigate('Login');
              }}
              variant={'solid'}
              style={s.btn}>
              <View style={s.btnView}>
                <Text style={s.btnText}>Submit</Text>
              </View>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ChangePass;
