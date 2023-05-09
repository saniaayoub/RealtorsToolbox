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
} from 'react-native';
import {Button} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {setTheme, setUserToken} from '../../../../Redux/actions';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import HomeImg from '../../../../assets/images/png/homeImg.png';
import Graph from '../../../../assets/images/png/Graph.png';
import Plus from 'react-native-vector-icons/AntDesign';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
);

const Data = [
  {
    id: 1,
    color: ['#FF0000', '#FFFFFF', '#000000'],
    title: 'This Year Goal',
    text: '1-99',
  },
  {
    id: 2,
    color: ['#000000', '#FFFFFF', '#0038FD'],
    title: 'Commission Goal',
    text: '$50,000',
  },
  {
    id: 3,
    color: ['#FFE600', '#FFFFFF', '#000000'],
    title: 'Volume Goal',
    text: '$2000,000',
  },
  {
    id: 4,
    color: ['#000000', '#FFFFFF', '#20E800'],
    title: 'Closed YTD',
    text: '1-99',
  },
  {
    id: 5,
    color: ['#CC00FF', '#FFFFFF', '#000000'],
    title: 'Closed Commssion',
    text: '$10,550',
  },
  {
    id: 6,
    color: ['#000000', '#FFFFFF', '#00EFFE'],
    title: 'Total Volume',
    text: '$350,000',
  },
];

const MyWhy = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  useEffect(() => {
    dispatch(setTheme('dark'));
  }, []);

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={{marginBottom: moderateScale(15, 0.1)}}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading]}>
          <Text style={[s.headingText, {color: textColor}]}>My Why</Text>

          <Button
            size="sm"
            onPressIn={async () => {
              console.log('add photos');
            }}
            variant={'solid'}
            style={s.btn}>
            <View style={s.btnView}>
              <Plus
                name="plus"
                size={moderateScale(12, 0.1)}
                color={textColor}
                solid
              />
              <Text style={[s.btnText, {color: textColor}]}>Add Photos</Text>
            </View>
          </Button>
        </View>
        <View>
          <Image source={HomeImg} resizeMode="cover" style={s.backImg} />
        </View>
        <View style={[s.btnView, {marginVertical: moderateScale(50, 0.1)}]}>
          <Button
            size="sm"
            onPressIn={async () => {
              console.log('Monthly');
            }}
            variant={'solid'}
            style={s.btn}>
            <Text style={[s.btnText, {color: textColor}]}>Monthly</Text>
          </Button>
          <Button
            size="sm"
            onPressIn={async () => {
              console.log('Yearly');
            }}
            variant={'solid'}
            style={s.btn}>
            <Text style={[s.btnText, {color: textColor}]}>Yearly</Text>
          </Button>
        </View>
        <View style={s.graphView}>
          <Image source={Graph} resizeMode="contain" style={s.graph} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyWhy;
