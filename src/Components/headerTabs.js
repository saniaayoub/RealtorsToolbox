import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Bell from 'react-native-vector-icons/FontAwesome5';
import Setting from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import FaqImg from '../assets/images/png/Faq.png';

const HeaderTabs = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Notifications')}>
        <Bell name="bell" size={moderateScale(28, 0.1)} color={'#fff'} solid />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('FAQs')}>
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
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SettingsStack')}>
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
