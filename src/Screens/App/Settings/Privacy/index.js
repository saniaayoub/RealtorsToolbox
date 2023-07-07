import {Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import s from './style';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import {AppContext, useAppContext} from '../../../../Context/AppContext';
import {backDark, textDark, backLight, textLight} from '../../../../Constants';

const Privacy = ({navigation}) => {
  const {theme} = useAppContext(AppContext);
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
          <Text style={[s.headingText, {color: textColor}]}>Privacy</Text>
        </View>

        <View>
          <Text style={[s.text, {color: textColor}]}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen boo
          </Text>
          <Text style={[s.text, {color: textColor}]}>
            {`\n`} A search for 'lorem ipsum' will uncover many web sites still
            in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;
