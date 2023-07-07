import {
  ImageBackground,
  Alert,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backImg from '../../../assets/images/png/backImg3.png';
import PhoneInput from 'react-native-phone-input';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioButton from '../../../Components/radio';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';
import BlurredView from '../../../Components/BlurredView';
import {postApi} from '../../../APIs';
import OTPModal from '../../../Components/otpModal/otpModal';
import Loader from '../../../Components/Loader';
import {validateEmail} from '../../../Constants';
import {AppContext, useAppContext} from '../../../Context/AppContext';

const Register = ({navigation}) => {
  const {setLoader, loader, setToken} = useAppContext(AppContext);

  const phonenum = useRef();
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfPass] = useState(true);
  const [gender, setGender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState();
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [phone, setPhone] = useState();
  const [onsubmit, setOnSubmit] = useState();
  const Textcolor = '#fff';

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

  useEffect(() => {}, []);

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

  const validate = () => {
    setOnSubmit(true);
    if (
      !fname ||
      !email ||
      !password ||
      !confirmPassword ||
      !isPhoneValid ||
      !phone ||
      !isEmailValid ||
      password !== confirmPassword
    ) {
      return;
    } else {
      sendOTP();
    }
  };

  const sendOTP = async () => {
    setLoader(true);
    Keyboard.dismiss();

    const data = {
      email: email,
      // register: true,
    };
    const res = await postApi('verify', data);
    console.log('res', res);
    if (res?.status == 'success') {
      // Alert.alert(res?.message);
      setTimeout(() => {
        setOnSubmit(false);
        setModalVisible(true);
      }, 500);
    } else {
      Alert.alert(res?.data?.message);
    }
    setLoader(false);
  };

  const register = async () => {
    setLoader(true);
    setModalVisible(!modalVisible);
    const form = {
      first_name: fname,
      gender: gender,
      type: 'user',
      phone: phone,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      otp: otp,
    };

    console.log('data', form);
    const res = await postApi('auth/register', form);
    console.log(res, 'return');
    if (res?.message) {
      Alert.alert(res?.message);
      navigation.goBack();
    } else {
      Alert.alert(res?.data?.message);
    }
    setLoader(false);
  };

  return (
    <View>
      {loader ? <Loader /> : null}
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={backImg} style={s.backImg}>
          <View>
            <Header navigation={navigation} />
          </View>
          <BlurredView w={0.9} h={0.85}>
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
                  style={s.inputText}
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
                  }}
                />
                {onsubmit && !fname ? (
                  <Text style={s.error}>* Required</Text>
                ) : null}
              </View>
              <View style={s.input}>
                <Input
                  w={{
                    base: '83%',
                    md: '25%',
                  }}
                  style={s.inputText}
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
                    validateEmail(email, setIsEmailValid);
                  }}
                />
                {onsubmit && !email ? (
                  <Text style={s.error}>* Required </Text>
                ) : email && !isEmailValid ? (
                  <Text style={s.error}>Please enter a valid email</Text>
                ) : null}
              </View>

              <View style={[s.input, s.inputContainerStyle]}>
                <PhoneInput
                  initialCountry={'us'}
                  textProps={{
                    placeholder: 'Enter Phone Number',
                    placeholderTextColor: Textcolor,
                  }}
                  autoFormat={true}
                  pickerBackgroundColor={'#CCCCCC'}
                  textStyle={[s.inputStyle, {color: Textcolor}]}
                  isValidNumber={e => console.log(e, 'here')}
                  ref={phonenum}
                  onChangePhoneNumber={phNumber => {
                    console.log(isPhoneValid);
                    setPhone(phonenum.current.getValue());
                    if (phonenum.current.isValidNumber()) {
                      setIsPhoneValid(true);
                    } else {
                      setIsPhoneValid(false);
                    }
                  }}
                />
              </View>
              {!isPhoneValid && phone ? (
                <Text style={[s.error, s.pherror]}>
                  Please enter a valid number
                </Text>
              ) : onsubmit && !phone ? (
                <Text style={[s.error, s.pherror]}>* Required</Text>
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
                        <TouchableOpacity
                          onPress={() => setshowPass(!showPass)}>
                          <Feather
                            name={showPass ? 'eye' : 'eye-off'}
                            color={Textcolor}
                            size={20}
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
                {onsubmit && !confirmPassword ? (
                  <Text style={s.error}>* Required</Text>
                ) : confirmPassword && confirmPassword !== password ? (
                  <Text style={s.error}>Password Does not match</Text>
                ) : null}
              </View>

              <View style={s.radioInput}>
                <Text style={[s.btnText, {fontSize: moderateScale(14, 0.1)}]}>
                  Gender
                </Text>
                {isSelected.map((item, i) => (
                  <View key={i} style={s.radio}>
                    <RadioButton
                      onPress={() => onRadioBtnClick(item)}
                      selected={item.selected}>
                      {item.name}
                    </RadioButton>
                  </View>
                ))}
              </View>
              <Button
                size="sm"
                onPressIn={async () => {
                  validate();
                }}
                variant={'solid'}
                style={s.btn}>
                <View style={s.btnView}>
                  <Text style={s.btnText}>Register</Text>
                </View>
              </Button>
            </View>
          </BlurredView>
          {modalVisible ? (
            <OTPModal
              navigation={navigation}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              submit={register}
              resend={sendOTP}
              setOtp={setOtp}
              screen={'register'}
              loader={loader}
            />
          ) : null}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Register;
