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
import Event from 'react-native-vector-icons/MaterialIcons';
import Chat from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageList = [
  {
    name: 'John Smith',
    time: 'Now',
    text: 'Awesome',
    image: dummyImg1,
  },
  {
    name: 'Julie Watson',
    time: '10.00pm',
    text: 'Send a Voice Message',
    image: dummyImg2,
  },
  {
    name: 'John Smith',
    time: 'Friday',
    text: 'Thanks a lots',
    image: dummyImg1,
  },
  {
    name: 'John Smith',
    time: 'Monday',
    text: 'Are You Busy',
    image: dummyImg2,
  },
  {
    name: 'John Smith',
    time: 'Last Week',
    text: 'Luch Today',
    image: dummyImg1,
  },
  {
    name: 'John Smith',
    time: 'Last Week',
    text: 'Nice',
    image: dummyImg1,
  },
  {
    name: 'John Smith',
    time: 'Last Month',
    text: 'Nice',
    image: dummyImg2,
  },
];

const Messages = ({navigation}) => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';

  useEffect(() => {}, []);

  return (
    <View style={[s.mainContainer, s.tabs, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={s.headingView}>
          <View style={[s.heading]}>
            <Text
              style={[
                s.headingText,
                {
                  color: textColor,
                },
              ]}>
              Messages
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log('chat');
            }}
            style={s.chatIcon}>
            <Chat
              name="chat-processing"
              color={textColor}
              solid
              size={moderateScale(30, 0.1)}
            />
            <Event
              name="edit"
              color={'#000'}
              solid
              size={moderateScale(12, 0.1)}
              style={[
                s.newChat,
                {
                  backgroundColor: textColor,
                },
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={s.notContainer}>
          {MessageList.map((item, index) => {
            return (
              <View
                key={index}
                style={[[s.message, s.not1, {borderBottomColor: textColor}]]}>
                <View style={s.message}>
                  <TouchableOpacity style={s.dp}>
                    <Image
                      source={item?.image}
                      style={s.dp}
                      resizeMode={'cover'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={s.description}
                    onPress={() => {
                      navigation.navigate('Chat');
                    }}>
                    <View style={s.message1}>
                      <Text style={[s.textRegular, {color: textColor}]}>
                        {item?.name}
                      </Text>
                    </View>
                    <Text style={[s.textSmall, {color: textColor}]}>
                      {item?.text}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={[s.textSmall, {color: textColor}]}>
                  {item?.time}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Messages;
