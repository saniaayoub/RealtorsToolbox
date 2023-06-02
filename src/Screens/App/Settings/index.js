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
import {setTheme, setUserToken} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import SwitchWithIcons from 'react-native-switch-with-icons';
import sun from '../../../assets/images/png/sun.png';
import moon from '../../../assets/images/png/moon.png';
import logout from '../../../assets/images/png/LogOut.png';
import logouticon from '../../../assets/images/png/logouticon.png';
import SwipeButton from 'rn-swipe-button';

const UserSettings = ({navigation}) => {
  const dispatch = useDispatch();
  const phonenum = useRef();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';

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
          <Text style={[s.headingText, {color: textColor}]}>Settings</Text>
        </View>
        <View style={s.inputContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            style={[s.input]}>
            <Input
              w="100%"
              isReadOnly
              variant="underlined"
              placeholder={'Edit profile'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon
                    name={'user-edit'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Privacy');
            }}
            style={[s.input]}>
            <Input
              w="100%"
              isReadOnly
              variant="underlined"
              placeholder={'Privacy'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon2
                    name={'privacy-tip'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Help');
            }}
            style={[s.input]}>
            <Input
              w="100%"
              isReadOnly
              variant="underlined"
              placeholder={'Help'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'help-circle'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}
            style={[s.input]}>
            <Input
              isReadOnly
              w="100%"
              variant="underlined"
              placeholder={'Resest Password'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'lock-reset'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PackageStatus');
            }}
            style={[s.input]}>
            <Input
              isReadOnly
              w="100%"
              variant="underlined"
              placeholder={'Package Details'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'package-variant'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>

          <View style={s.switch}>
            <Text style={[s.inputText1, {color: textColor}]}>
              Dark & Light Mode
            </Text>
            <SwitchWithIcons
              icon={{true: moon, false: sun}}
              value={theme === 'dark' ? true : false}
              onValueChange={() => {
                if (theme === 'dark') {
                  dispatch(setTheme('light'));
                } else {
                  dispatch(setTheme('dark'));
                }
              }}
              iconColor={{true: '#000', false: '#000'}}
              trackColor={{true: '#343434', false: '#343434'}}
              thumbColor={{true: '#FDBC2C', false: '#fff'}}
            />
          </View>

          <View
            style={{
              marginVertical: moderateScale(25, 0.1),
              alignSelf: 'flex-start',
            }}>
            <SwipeButton
              onSwipeSuccess={() => {
                dispatch(setUserToken(''));
              }}
              thumbIconImageSource={logouticon}
              title="Log out"
              titleStyles={s.logout}
              railBackgroundColor={textColor}
              railFillBackgroundColor={textColor}
              railFillBorderColor={textColor}
              thumbIconBackgroundColor="#FDBC2C"
              thumbIconBorderColor="#FDBC2C"
              height={moderateScale(35, 0.1)}
              width={moderateScale(130, 0.1)}
              thumbIconComponent={() => {
                return (
                  <Image
                    source={logouticon}
                    resizeMode="cover"
                    style={s.logoutimg}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserSettings;
