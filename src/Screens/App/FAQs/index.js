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

import s from './style';
import {moderateScale} from 'react-native-size-matters';
import HeaderTabs from '../../../Components/headerTabs';
import Header from '../../../Components/header';
import Plus from 'react-native-vector-icons/AntDesign';
import Setting from 'react-native-vector-icons/Ionicons';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import {backDark, textDark, backLight, textLight} from '../../../Constants';

const NotificationList = [
  {
    faq: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
    text: 'is simply dummy text of the printing and typesetting industry. ',
  },
  {
    faq: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
    text: 'is simply dummy text of the printing and typesetting industry. ',
  },
  {
    faq: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
    text: 'is simply dummy text of the printing and typesetting industry. ',
  },
  {
    faq: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
    text: 'is simply dummy text of the printing and typesetting industry. ',
  },
  {
    faq: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
    text: 'is simply dummy text of the printing and typesetting industry. ',
  },
];

const FAQs = ({navigation}) => {
  const {theme} = useAppContext(AppContext);

  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;

  const [selected, setSelected] = useState([]);

  useEffect(() => {}, []);

  const remove = index => {
    let temp = [...selected];
    if (selected.includes(index)) {
      temp = temp.filter(elem => elem != index);
    }
    setSelected([...temp]);
  };

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={s.tabs}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading, {borderBottomColor: textColor}]}>
          <Text style={[s.headingText, {color: textColor}]}>FAQs</Text>
        </View>
        <View style={s.faqContainer}>
          {NotificationList.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  selected.includes(index)
                    ? remove(index)
                    : setSelected([...selected, index]);
                }}
                style={[
                  s.container,
                  {
                    backgroundColor: selected.includes(index)
                      ? '#8D8D8D'
                      : '#656464',
                  },
                ]}>
                <Plus
                  name={selected.includes(index) ? 'minus' : 'plus'}
                  size={moderateScale(22, 0.1)}
                  color={'#fff'}
                  solid
                />
                <Text style={[s.textRegular, {color: textColor}]}>
                  {selected.includes(index) ? item?.faq : item?.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQs;
