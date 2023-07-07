import {Text, View, Image, ScrollView} from 'react-native';
import {Button} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';

import s from './style';
import {moderateScale} from 'react-native-size-matters';

import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import HomeImg from '../../../../assets/images/png/homeImg.png';
import Graph from '../../../../Components/Graph';
import Plus from 'react-native-vector-icons/AntDesign';
import ImagePicker from '../../../../Components/imagePickerModal';
import {AppContext, useAppContext} from '../../../../Context/AppContext';
import {backDark, textDark, backLight, textLight} from '../../../../Constants';

const MyWhy = ({navigation}) => {
  const {theme} = useAppContext(AppContext);

  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;
  const [showCamera, setShowCamera] = useState(false);
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
          <Text style={[s.headingText, {color: textColor}]}>My Why</Text>
          <Button
            size="sm"
            onPressIn={async () => {
              setShowCamera(true);
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
        <View
          style={[
            s.btnView,
            {
              marginVertical: moderateScale(50, 0.1),
              bottom: moderateScale(-10, 0.1),
            },
          ]}>
          <Button
            size="sm"
            onPressIn={async () => {
              navigation.navigate('Monthly');
            }}
            variant={'solid'}
            style={s.btn}>
            <Text style={[s.btnText, {marginLeft: 0, color: textColor}]}>
              Monthly
            </Text>
          </Button>
          <Button
            size="sm"
            onPressIn={async () => {
              navigation.navigate('Yearly');
            }}
            variant={'solid'}
            style={s.btn}>
            <Text style={[s.btnText, {marginLeft: 0, color: textColor}]}>
              Yearly
            </Text>
          </Button>
        </View>

        <Graph />
        <ImagePicker
          modalVisible={showCamera}
          setModalVisible={setShowCamera}
          screen={'Add Photo'}
        />
      </ScrollView>
    </View>
  );
};

export default MyWhy;
