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
import {setTheme, setUserToken} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import Header from '../../../Components/header';
import Plus from 'react-native-vector-icons/AntDesign';
import {Agenda} from 'react-native-calendars';

const Schedule = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';

  const [selected, setSelected] = useState('');

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
          <Text style={[s.headingText, {color: textColor}]}>Calendar</Text>
          <Button
            size="sm"
            onPressIn={async () => {
              console.log('Add Appointment');
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
              <Text style={[s.btnText, {color: textColor}]}>
                Add Appointment
              </Text>
            </View>
          </Button>
        </View>

        <View style={{flex: 1}}>
          <Agenda
            items={{
              '2022-01-01': [{text: 'Item 1'}, {text: 'Item 2'}],
              '2022-01-02': [{text: 'Item 3'}],
              '2022-01-03': [{text: 'Item 4'}, {text: 'Item 5'}],
            }}
            loadItemsForMonth={month => {
              // Load items for the month here
            }}
            renderItem={item => {
              console.log(item, item);
              return (
                <View>
                  <Text>{item.text}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;
