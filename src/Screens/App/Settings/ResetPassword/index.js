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
  FlatList,
  Alert,
} from 'react-native';
import {Button, Input, Menu, Pressable, TextArea} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import {setTheme, setUserToken} from '../../../../Redux/actions';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Fontisto';

const ResetPassword = ({navigation}) => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfPass] = useState(true);
  const [showCurrPass, setShowCurrPass] = useState(true);

  const [validate, setValidate] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading, {borderBottomColor: textColor}]}>
          <Text style={[s.headingText, {color: textColor}]}>
            Reset Password
          </Text>
        </View>
        {!validate ? (
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
            </View>
          </View>
        )}
        <View style={s.btns}>
          <Button
            size="sm"
            onPressIn={async () => {
              setValidate(!validate);
              if (validate) {
                Alert.alert('Password successfully changed');
                navigation.navigate('UserSettings');
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
