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
import dummyImg1 from '../../../assets/images/png/dummyImg1.png';
import dummyImg2 from '../../../assets/images/png/dummyImg2.png';

const NotificationList = [
  {
    name: 'John Smith',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg1,
  },
  {
    name: 'Julie Watson',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg2,
  },
  {
    name: 'John Smith',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg1,
  },
  {
    name: 'John Smith',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg2,
  },
  {
    name: 'John Smith',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg1,
  },
  {
    name: 'John Smith',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg1,
  },
  {
    name: 'John Smith',
    time: '4 Hours ago',
    text: 'who you might know is on Profile',
    image: dummyImg2,
  },
];

const Notifications = ({navigation}) => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';

  useEffect(() => {
    dispatch(setTheme('dark'));
  }, []);

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <View style={s.tabs}>
        <Header navigation={navigation} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={s.tabs}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading, {borderBottomColor: textColor}]}>
          <Text style={[s.headingText, {color: textColor}]}>Notifications</Text>
        </View>
        <View style={s.notContainer}>
          {NotificationList.map((item, index) => {
            return (
              <View
                style={[
                  [s.notification, s.not1, {borderBottomColor: textColor}],
                ]}>
                <View style={s.dp}>
                  <Image
                    source={item?.image}
                    style={s.dp}
                    resizeMode={'cover'}
                  />
                </View>
                <TouchableOpacity style={s.description} onPress={() => {}}>
                  <View style={s.notification}>
                    <Text style={[s.textRegular, s.bold, {color: '#FDBC2C'}]}>
                      {item?.name}
                      {', '}
                    </Text>
                    <Text style={[s.textRegular, {color: textColor}]}>
                      {item?.text}
                    </Text>
                  </View>
                  <Text style={[s.textSmall, {color: '#7B7B7B'}]}>
                    {item?.time}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;
