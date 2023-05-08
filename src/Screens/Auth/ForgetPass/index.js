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
  const Textcolor = theme === 'dark' ? '#fff' : '#222222';
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
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ForgetPass;
