import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Button} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {setTheme, setUserToken, addEvent} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import Header from '../../../Components/header';
import Plus from 'react-native-vector-icons/AntDesign';
import {Calendar, LocaleConfig, Agenda} from 'react-native-calendars';

const Schedule = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const events = useSelector(state => state.reducer.events);
  const [items, setItems] = useState({});
  // const [eventArr, setEventArr] = useState({});

  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : 'white';

  useEffect(() => {
    console.log(events, 'eventss');
    // setEventArr(events);
  }, [events]);

  const timeToString = time => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  let keys = Object.keys(events);

  const renderItem = item => {
    return (
      <TouchableOpacity style={s.item}>
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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

        <View>
          <Agenda
            style={{height: moderateScale(400, 0.1)}}
            // selected="2023-06-05"
            items={events}
            loadItemsForMonth={loadItems}
            renderItem={(item, isFirst) => (
              <TouchableOpacity style={s.item}>
                <Text style={[s.appText, {color: backColor}]}>
                  {item?.name}
                </Text>
                <Text style={[s.appText, {color: backColor}]}>
                  {item?.time}
                </Text>
              </TouchableOpacity>
            )}
            showClosingKnob={true}
            theme={{
              calendarBackground: backColor,
              dayTextColor: textColor,
              textDisabledColor: '#444',
              monthTextColor: textColor,
              selectedDotColor: '#FDBC2C',
              selectedDayBackgroundColor: '#FDBC2C',
              arrowColor: '#FDBC2C',
              todayTextColor: '#FDBC2C',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;

{
  /* <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
              console.log(day, 'day');
              if (eventData) {
              }
            }}
            markedDates={events}
            theme={{
              calendarBackground: backColor,
              dayTextColor: textColor,
              textDisabledColor: '#444',
              monthTextColor: textColor,
              selectedDayBackgroundColor: '#FDBC2C',
              arrowColor: '#FDBC2C',
              todayTextColor: '#FDBC2C',
            }}
          />

          {keys?.map((key, index) => {
            return (
              <TouchableOpacity style={s.item}>
                <View>
                  <Text>{`${key}: ${events[key]?.appType}`}</Text>
                  <Text>{`${key}: ${events[key]?.time}`}</Text>
                </View>
              </TouchableOpacity>
            );
          })} */
}
