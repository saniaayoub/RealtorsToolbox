import {Text, View, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import {AppContext, useAppContext} from '../../../../Context/AppContext';
import {backDark, textDark, backLight, textLight} from '../../../../Constants';

const Help = ({navigation}) => {
  const {theme} = useAppContext(AppContext);
  const phonenum = useRef();
  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;
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
          <Text style={[s.headingText, {color: textColor}]}>Help</Text>
        </View>

        <View>
          <Text style={[s.text, {color: textColor}]}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen boo
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;
