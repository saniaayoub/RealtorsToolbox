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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Schedule = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const marked = {
    '2023-05-15': {
      // marked: true,
      selected: true,
      disableTouchEvent: true,
    },
    '2023-05-19': {
      // marked: true,
      selected: true,
      disableTouchEvent: true,
    },
    '2023-06-20': {
      // marked: true,
      selected: true,
      disableTouchEvent: true,
    },
  };
  const [selected, setSelected] = useState('');

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
          <Text style={[s.headingText, {color: textColor}]}>Calendar</Text>
          <Button
            size="sm"
            onPressIn={async () => {
              navigation.navigate('AddAppointment');
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

        <View style={{flex: 1, backgroundColor: backColor}}>
          <Calendar
            onDayPress={day => {
              console.warn(day);
            }}
            markedDates={marked}
            theme={{
              calendarBackground: backColor,
              dayTextColor: textColor,
              textDisabledColor: '#444',
              monthTextColor: textColor,
              selectedDayBackgroundColor: '#FDBC2C',
            }}
          />
          {/* <Agenda
            selected="2022-12-01"
            items={{
              '2022-12-01': [
                {name: 'Cycling'},
                {name: 'Walking'},
                {name: 'Running'},
              ],
              '2022-12-02': [{name: 'Writing'}],
            }}
            renderItem={(item, isFirst) => (
              <TouchableOpacity style={s.item}>
                <Text style={s.itemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;
