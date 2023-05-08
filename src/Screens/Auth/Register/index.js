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
import PhoneInput from 'react-native-phone-input';
// import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioButton from '../../../Components/radio';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
);

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const phonenum = useRef();
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(false);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfPass] = useState(true);
  const [gender, setGender] = useState('');
  const [fnameErr, setFnameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [conPassErr, setConPassErr] = useState('');
  const [phNumErr, setPhNumErr] = useState('');
  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState();
  const theme = useSelector(state => state.reducer.theme);
  const Textcolor = theme === 'dark' ? '#fff' : '#222222';
  const [isSelected, setIsSelected] = useState([
    {
      id: 1,
      name: 'Male',
      selected: true,
    },
    {
      id: 2,
      name: 'Female',
      selected: false,
    },
  ]);

  const onRadioBtnClick = item => {
    let updatedState = isSelected.map(isSelectedItem =>
      isSelectedItem.id === item.id
        ? {...isSelectedItem, selected: true}
        : {...isSelectedItem, selected: false},
    );
    setIsSelected(updatedState);
    setGender(item.name);
    console.log(item.name);
  };

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
              <Text style={s.heading1}>Create Your Account</Text>
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
                    <Icon
                      name={'user'}
                      color={Textcolor}
                      size={moderateScale(19, 0.1)}
                    />
                  </View>
                }
                placeholder="Full Name"
                placeholderTextColor={Textcolor}
                value={fname}
                onChangeText={text => {
                  setFname(text);
                  let valid = emailReg.test(text);
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
                  <View style={s.iconCircle}>
                    <Icon1
                      name={'email'}
                      color={Textcolor}
                      size={moderateScale(18, 0.1)}
                    />
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
            <View
              style={[
                s.input,
                s.inputContainerStyle,
                {
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1,
                  // flexDirection: 'row',
                },
              ]}>
              <PhoneInput
                initialCountry={'us'}
                textProps={{
                  placeholder: 'Enter Phone Number',
                  placeholderTextColor: Textcolor,
                }}
                autoFormat={true}
                pickerBackgroundColor={'#000'}
                textStyle={[s.inputStyle, {color: Textcolor}]}
                isValidNumber={e => console.log(e, 'here')}
                ref={phonenum}
                onChangePhoneNumber={phNumber => {
                  if (phonenum.current.isValidNumber()) {
                    setPhNumErr('');
                  } else {
                    setPhNumErr('*');
                  }
                }}
              />
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

            <View style={s.radioInput}>
              <Text style={[s.btnText, {fontSize: moderateScale(14, 0.1)}]}>
                Gender
              </Text>
              {isSelected.map((item, i) => (
                <View style={s.radio}>
                  <RadioButton
                    onPress={() => onRadioBtnClick(item)}
                    selected={item.selected}
                    key={item.id}>
                    {item.name}
                  </RadioButton>
                </View>
              ))}
            </View>
            <Button
              size="sm"
              onPressIn={async () => {
                navigation.navigate('Login');
              }}
              variant={'solid'}
              style={s.btn}>
              <View style={s.btnView}>
                <Text style={s.btnText}>Register</Text>
              </View>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;
