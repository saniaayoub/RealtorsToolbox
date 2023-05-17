import {Text, View, ScrollView} from 'react-native';
import {Button, Input, Menu, Pressable, TextArea} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import PackageCard from '../../../../Components/packageCard';
import yellow from '../../../../assets/images/png/yellow.png';
import grey from '../../../../assets/images/png/grey.png';
import orange from '../../../../assets/images/png/orange.png';

const packages = [
  {title: 'Bronze', image: orange, rate: '$200.00'},
  {title: 'Gold', image: yellow, rate: '$250.00'},
  {title: 'Silver', image: grey, rate: '$300.00'},
];

const PackageStatus = ({navigation}) => {
  const dispatch = useDispatch();

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
        <View style={{marginBottom: moderateScale(15, 0.1)}}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading]}>
          <Text style={[s.headingText, {color: textColor}]}>
            Package Status
          </Text>
        </View>
        <View style={[s.heading, {justifyContent: 'space-between'}]}>
          <Text style={[s.headingText1, {color: textColor}]}> Name</Text>
          <Text style={[s.headingText1, {color: textColor}]}> Message</Text>
          <Text style={[s.headingText1, {color: textColor}]}> Price</Text>
          <Text style={[s.headingText1, {color: textColor}]}> Date</Text>
        </View>

        <View
          style={[
            s.row,
            {borderColor: textColor, justifyContent: 'space-between'},
          ]}>
          <Text style={[s.headingText1, {color: textColor}]}> Basic</Text>
          <Text style={[s.headingText1, {color: textColor}]}> 250 / 152</Text>
          <Text style={[s.headingText1, {color: textColor}]}> $25.00</Text>
          <Text style={[s.headingText1, {color: textColor}]}> 20-06-2023</Text>
        </View>

        <View style={[s.heading]}>
          <Text
            style={[
              s.headingText,
              {marginTop: moderateScale(10, 0.1), color: textColor},
            ]}>
            Package
          </Text>
        </View>

        <View style={[s.heading, {justifyContent: 'space-between'}]}>
          {packages.map((item, index) => {
            return <PackageCard key={index} item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PackageStatus;
