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
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {setTheme, setUserToken} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import HomeImg from '../../../assets/images/png/homeImg.png';
import Graph from '../../../assets/images/png/Graph.png';
import Dart from '../../../assets/images/png/dart.png';

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

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  useEffect(() => {
    dispatch(setTheme('dark'));
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[s.mainContainer, {backgroundColor: backColor}]}>
      <View style={[s.heading, {borderBottomColor: textColor}]}>
        <Text style={[s.headingText, {color: textColor}]}>Welcome To</Text>
        <Text style={[s.headingText1, {color: textColor}]}>
          Realtor’s Toolbox
        </Text>
      </View>
      <View style={{marginVertical: moderateScale(15, 0.1)}}>
        <HeaderTabs navigation={navigation} />
      </View>

      <View>
        <Image source={HomeImg} resizeMode="cover" style={s.backImg} />
        <TouchableOpacity
          onPress={() => navigation.navigate('MyWhy')}
          style={s.dartView}>
          <Image source={Dart} resizeMode="cover" style={s.dart} />
          <Text style={[s.dartText]}>My why</Text>
        </TouchableOpacity>
      </View>
      <View style={s.container}>
        {Data.map((item, index) => (
          <LinearGradient
            colors={item.color}
            key={index}
            start={{x: 0.5, y: 0, z: 0.6}}
            end={{x: 1.0, y: 1.0, z: 1.0}}
            style={[s.item, {backgroundColor: backColor}]}>
            <View style={[s.buttonText, {backgroundColor: backColor}]}>
              <Text style={[s.btnText, {color: textColor}]}>{item.title}</Text>
              <Text style={[s.btnText1, {color: textColor}]}>{item.text}</Text>
            </View>
          </LinearGradient>
        ))}
      </View>

      <View style={s.graphView}>
        <Image source={Graph} resizeMode="contain" style={s.graph} />
      </View>
    </ScrollView>
  );
};

export default Home;
