import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Feather from 'react-native-vector-icons/Feather';

const OTPModal = ({
  modalVisible,
  screen,
  setModalVisible,
  submit,
  resend,
  setOtp,
  navigation,
  handleSubmit,
  OtpSubmit,
  loader,
}) => {
  const otpRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      otpRef.current.focusField(0);
    }, 500);
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={s.centeredView}>
        {loader ? (
          <View
            style={[
              {
                position: 'absolute',
                zIndex: 1,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'rgba(0,0,0,0.5)',
              },
            ]}>
            <ActivityIndicator size="large" color="#FFD700" />
          </View>
        ) : null}
        <View style={s.modalView}>
          <Button
            size="sm"
            onPressIn={() => setModalVisible(false)}
            variant={'link'}
            style={s.close}
            backgroundColor={'transparent'}
            borderRadius={moderateScale(14, 0.1)}
            padding={moderateScale(7, 0.1)}
            zIndex={1000}
            position="absolute"
            right={moderateScale(15, 0.1)}
            top={moderateScale(10, 0.1)}>
            <Feather name="x" size={moderateScale(22, 0.1)} color={'#fff'} />
          </Button>
          <Text style={s.verifyHeading}>Verification Code</Text>
          <Text style={s.verifyText}>
            Please enter the verification code sent to email
          </Text>

          <OTPInputView
            style={{width: '80%', height: moderateScale(150, 0.1)}}
            pinCount={4}
            ref={otpRef}
            autoFocusOnLoad={true}
            codeInputFieldStyle={s.underlineStyleBase}
            codeInputHighlightStyle={s.underlineStyleHighLighted}
            onCodeFilled={code => {}}
            onCodeChanged={code => {
              setOtp(code);
            }}
          />
          <View style={s.button}>
            <Button
              size="sm"
              variant={'solid'}
              _text={{
                color: '#6627EC',
              }}
              backgroundColor={'#FDBC2C'}
              borderRadius={50}
              w={moderateScale(140, 0.1)}
              h={moderateScale(35, 0.1)}
              alignItems={'center'}
              onPressIn={() => {
                if (screen == 'register') {
                  submit();
                }
                if (screen == 'Forgot') {
                  OtpSubmit();
                }
              }}>
              <Text style={[s.btnText, {color: '#222222'}]}>Submit</Text>
            </Button>
            <Button
              style={{marginTop: moderateScale(10, 0.1)}}
              size="sm"
              variant={'solid'}
              _text={{
                color: '#6627EC',
              }}
              backgroundColor={'#FDBC2C'}
              borderRadius={50}
              w={moderateScale(140, 0.1)}
              h={moderateScale(35, 0.1)}
              alignItems={'center'}
              onPressIn={() => {
                resend();
              }}>
              <Text style={[s.btnText, {color: '#222222'}]}>Resend</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OTPModal;

const s = StyleSheet.create({
  heading: {
    marginTop: moderateScale(-90, 0.1),
    marginBottom: moderateScale(60, 0.1),
  },
  backbutton: {
    position: 'absolute',
    left: 20,
    top: 25,
    zIndex: 1000,
  },
  headingText: {
    color: '#fff',
    fontSize: moderateScale(25, 0.1),
    lineHeight: moderateScale(30, 0.1),
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  button: {
    marginTop: moderateScale(15, 0.1),
    marginBottom: moderateScale(10, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderStyleHighLighted: {
    borderColor: '#FDBC2C',
  },
  underlineStyleBase: {
    marginHorizontal: moderateScale(15, 0.1),
    width: moderateScale(40, 0.1),
    height: moderateScale(40, 0.1),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#fff',
    color: '#fff',
  },

  underlineStyleHighLighted: {
    borderColor: '#FDBC2C',
  },
  submit: {
    color: '#000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20, 0.1),
  },
  modalView: {
    margin: moderateScale(20, 0.1),
    backgroundColor: '#404040',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    padding: moderateScale(35, 0.1),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: moderateScale(15, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  verifyHeading: {
    color: '#fff',
    fontSize: moderateScale(22, 0.1),
    marginBottom: moderateScale(10, 0.1),
    lineHeight: moderateScale(26, 0.1),
  },
  verifyText: {
    color: '#fff',
    fontSize: moderateScale(11, 0.1),
    width: moderateScale(180, 0.1),
    lineHeight: moderateScale(15, 0.1),
    textAlign: 'center',
  },
  otpView: {
    height: moderateScale(120, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLink: {
    position: 'absolute',
    bottom:
      Platform.OS == 'ios' ? moderateScale(120, 0.1) : moderateScale(40, 0.1),
  },
});
