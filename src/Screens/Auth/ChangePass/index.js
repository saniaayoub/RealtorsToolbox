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
import backImg from '../../../assets/images/png/backImg3.png';
import Header from '../../../Components/header';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import BlurredView from '../../../Components/BlurredView';
import Loader from '../../../Components/Loader';
import {postApi} from '../../../APIs';

const ChangePass = ({navigation, route}) => {
  const {theme, setLoader, loader} = useAppContext(AppContext);
  const [email, setEmail] = useState(route?.params.email);
  const [otp, setOtp] = useState(route?.params.otp);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfPass] = useState(true);
  const [onsubmit, setOnSubmit] = useState(false);
  const Textcolor = '#fff';

  useEffect(() => {
    setLoader(false);
  }, []);

  const passChange = async () => {
    setOnSubmit(true);
    if (!password || !confirmPassword || password !== confirmPassword) {
      return;
    }

    setLoader(true);
    Keyboard.dismiss();
    const form = {
      email: email,
      otp: otp,
      password: password,
      confirm_password: confirmPassword,
    };
    const res = await postApi('forgot-password', form);

    if (res?.message) {
      Alert.alert(res?.message);
      navigation.navigate('Login');
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
          <BlurredView w={0.9} h={0.6}>
            <View style={s.inputView}>
              <View style={s.headingView}>
                <Text style={s.heading1}>Change Password</Text>
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
                    ) : null
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

              <Button
                size="sm"
                onPressIn={async () => {
                  passChange();
                }}
                variant={'solid'}
                style={s.btn}>
                <View style={s.btnView}>
                  <Text style={s.btnText}>Submit</Text>
                </View>
              </Button>
            </View>
          </BlurredView>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default ChangePass;
