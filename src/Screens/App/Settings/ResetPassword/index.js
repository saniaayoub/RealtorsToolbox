import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import {Button, Input} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import Header from '../../../../Components/header';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {AppContext, useAppContext} from '../../../../Context/AppContext';
import {backDark, textDark, backLight, textLight} from '../../../../Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../../Components/Loader';
import {postApi} from '../../../../APIs';

const ResetPassword = ({navigation}) => {
  const {theme, token, loader, setLoader} = useAppContext(AppContext);

  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfPass] = useState(true);
  const [showCurrPass, setShowCurrPass] = useState(true);
  const [storedPassword, setStorePassword] = useState('');
  const [onsubmit, setOnSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    getCurrPass();
  }, []);

  const getCurrPass = async () => {
    let curPass = await AsyncStorage.getItem('password');
    setStorePassword(curPass);
  };

  const validate = () => {
    Keyboard.dismiss();
    if (currentPassword === storedPassword) {
      setIsValid(true);
    } else if (currentPassword) {
      Alert.alert('Incorrect Password');
    } else {
      return;
    }
  };

  const passChange = async () => {
    setOnSubmit(true);
    if (!newPassword || !confirmPassword || newPassword !== confirmPassword) {
      return;
    }

    setLoader(true);
    Keyboard.dismiss();
    const form = {
      old_password: storedPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };
    const res = await postApi('change-pass', form, token);
    console.log(res, 'res');
    if (res?.status === true) {
      Alert.alert(res?.message);
      await AsyncStorage.setItem('password', confirmPassword);
      navigation.goBack();
    } else {
      Alert.alert(res?.data?.message);
    }
    setLoader(false);
  };

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />
      {loader ? <Loader /> : null}
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={[s.heading, {borderBottomColor: textColor}]}>
          <Text style={[s.headingText, {color: textColor}]}>
            Reset Password
          </Text>
        </View>
        {!isValid ? (
          <View style={s.inputContainer}>
            <View style={s.input}>
              <Input
                variant="underlined"
                InputLeftElement={
                  <View style={[s.iconCircle, {borderColor: textColor}]}>
                    <Icon2 name="locked" color={textColor} size={18} />
                  </View>
                }
                placeholder="Current Password"
                placeholderTextColor={textColor}
                value={currentPassword}
                onChangeText={password => {
                  setCurrentPassword(password);
                }}
                InputRightElement={
                  currentPassword ? (
                    <View style={s.eye}>
                      <TouchableOpacity
                        onPress={() => setShowCurrPass(!showCurrPass)}>
                        <Feather
                          name={showCurrPass ? 'eye' : 'eye-off'}
                          color={textColor}
                          size={20}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null
                }
                style={s.inputText}
                secureTextEntry={showCurrPass}
              />
            </View>
          </View>
        ) : (
          <View style={s.inputContainer}>
            <View style={s.input}>
              <Input
                variant="underlined"
                InputLeftElement={
                  <View style={[s.iconCircle, {borderColor: textColor}]}>
                    <Icon2 name="locked" color={textColor} size={18} />
                  </View>
                }
                placeholder="New Password"
                placeholderTextColor={textColor}
                value={newPassword}
                onChangeText={password => {
                  setNewPassword(password);
                }}
                InputRightElement={
                  newPassword ? (
                    <View style={s.eye}>
                      <TouchableOpacity onPress={() => setshowPass(!showPass)}>
                        <Feather
                          name={showPass ? 'eye' : 'eye-off'}
                          color={textColor}
                          size={20}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null
                }
                style={s.inputText}
                secureTextEntry={showPass}
              />
              {onsubmit && !newPassword ? (
                <Text style={s.error}> * Required</Text>
              ) : null}
            </View>
            <View style={s.input}>
              <Input
                variant="underlined"
                InputLeftElement={
                  <View style={[s.iconCircle, {borderColor: textColor}]}>
                    <Icon2 name="locked" color={textColor} size={18} />
                  </View>
                }
                placeholder="Confirm Password"
                placeholderTextColor={textColor}
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
                          color={textColor}
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
              ) : confirmPassword && confirmPassword !== newPassword ? (
                <Text style={s.error}>Password Does not match</Text>
              ) : null}
            </View>
          </View>
        )}
        <View style={s.btns}>
          <Button
            size="sm"
            onPressIn={async () => {
              if (!isValid) {
                validate();
              } else {
                passChange();
              }
            }}
            variant={'solid'}
            style={s.btn}>
            <Text style={s.btnText}>{!validate ? 'Reset' : 'Confirm'}</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
