import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Button} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import HeaderTabs from '../../../Components/headerTabs';
import Header from '../../../Components/header';
import Plus from 'react-native-vector-icons/AntDesign';
import {Calendar, LocaleConfig, Agenda} from 'react-native-calendars';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import {backDark, textDark, backLight, textLight} from '../../../Constants';

const Schedule = ({navigation}) => {
  const {events, theme, setEvents} = useAppContext(AppContext);

  const [items, setItems] = useState({});
  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;

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
            // loadItemsForMonth={loadItems}
            renderItem={(item, isFirst) => (
              <TouchableOpacity style={s.item}>
                <Text style={[s.appText, {color: textColor}]}>
                  {item?.name}
                </Text>
                <Text style={[s.appText, {color: textColor}]}>
                  {item?.time}
                </Text>
              </TouchableOpacity>
            )}
            showClosingKnob={true}
            pastScrollRange={12}
            futureScrollRange={12}
            theme={{
              // 'stylesheet.agenda.main': {
              //   header: {
              //     width: '100%',
              //     height: '70%',
              //   },

              //   weekdays: {
              //     height: 0,
              //     width: 0,
              //   },
              // },
              agendaKnobColor: textColor,
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
