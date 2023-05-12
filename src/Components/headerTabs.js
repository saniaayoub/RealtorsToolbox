import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Bell from 'react-native-vector-icons/FontAwesome5';
import Setting from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import Faq from '../assets/images/svg/Faq.svg';
import FaqImg from '../assets/images/png/Faq.png';

const HeaderTabs = props => {
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  return (
    <View
      style={styles.container}
      onPress={() => {
        props.navigation.goBack();
      }}>
      <TouchableOpacity onPress={() => console.log('bell')}>
        <Bell name="bell" size={moderateScale(28, 0.1)} color={'#fff'} solid />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('FAQ')}>
        {/* <Faq /> */}
        <Image
          source={FaqImg}
          width={undefined}
          height={undefined}
          resizeMode="contain"
          style={{
            height: moderateScale(28, 0.1),
            width: moderateScale(28, 0.1),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('setting')}>
        <Setting
          name="settings-sharp"
          size={moderateScale(28, 0.1)}
          color={'#fff'}
          solid
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#3F3E3E',

    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: moderateScale(10, 0.1),
    borderRadius: moderateScale(5, 0.1),
  },
});
