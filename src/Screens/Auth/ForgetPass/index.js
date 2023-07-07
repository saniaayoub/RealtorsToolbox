import {
  ImageBackground,
  Alert,
  Text,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import backImg from '../../../assets/images/png/backImg3.png';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlurredView from '../../../Components/BlurredView';
import {textLight, validateEmail} from '../../../Constants';
import OTPModal from '../../../Components/otpModal/otpModal';
import {postApi} from '../../../APIs';
import Loader from '../../../Components/Loader';
import {AppContext, useAppContext} from '../../../Context/AppContext';

const ForgetPass = ({navigation}) => {
  const {setLoader, loader} = useAppContext(AppContext);
  const [email, setEmail] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [onsubmit, setOnSubmit] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState();

  useEffect(() => {
    setLoader(false);
  }, []);

  const sendOTP = async () => {
    setOnSubmit(true);
    if (!email || !isEmailValid) {
      return;
    }
    setLoader(true);
    Keyboard.dismiss();
    const form = {
      email: email,
      // forget: true,
    };
    const res = await postApi('mail', form);
    // console.log(res, form, 'return');

    if (res?.status == 'success') {
      // Alert.alert(res?.message);
      setTimeout(() => {
        setModalVisible(true);
      }, 1000);
    } else {
      Alert.alert(res?.data?.message);
    }
    setLoader(false);
  };

  const verifyOTP = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('ChangePass', {email: email, otp: otp});
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
          <BlurredView w={0.9} h={0.6}>
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
                      <Icon name={'envelope'} color={textLight} size={18} />
                    </View>
                  }
                  placeholder="Email Address"
                  placeholdertextLight={textLight}
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

              <Button
                size="sm"
                onPressIn={async () => {
                  sendOTP();
                }}
                variant={'solid'}
                style={s.btn}>
                <View style={s.btnView}>
                  <Text style={s.btnText}>Send</Text>
                </View>
              </Button>
            </View>
          </BlurredView>
          {modalVisible ? (
            <OTPModal
              navigation={navigation}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              submit={verifyOTP}
              resend={sendOTP}
              OtpSubmit={verifyOTP}
              screen={'Forgot'}
              setOtp={setOtp}
              loader={loader}
            />
          ) : null}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default ForgetPass;
