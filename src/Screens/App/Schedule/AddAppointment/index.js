import {Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Button, Input, Menu, Pressable, TextArea} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {setTheme, setUserToken, addEvent} from '../../../../Redux/actions';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import DownArrow from 'react-native-vector-icons/Entypo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-date-picker';
import RadioButton from '../../../../Components/radio';
import InviteModal from '../../../../Components/invitationModal';
import moment from 'moment';

const Form = [
  {title: 'First Name'},
  {title: 'Last Name'},
  {title: 'Email Address'},
  {title: 'Contact No'},
  {title: 'Address'},
  {title: 'Type Of Appointment'},
  {title: 'Date'},
  {title: 'Time'},
  {title: 'No. of Properties'},
  {title: 'No. of Bookings'},
  {title: 'Gender'},
  {title: 'Description'},
];

const Appointment = [
  {id: 'Appointment Type 1'},
  {id: 'Appointment Type 2'},
  {id: 'Appointment Type 3'},
  {id: 'Appointment Type 4'},
  {id: 'Appointment Type 5'},
  {id: 'Appointment Type 6'},
  {id: 'Appointment Type 7'},
  {id: 'Appointment Type 8'},
  {id: 'Appointment Type 9'},
];
const AddAppointment = ({navigation}) => {
  const dispatch = useDispatch();
  const phonenum = useRef();
  const events = useSelector(state => state.reducer.events);
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const [items, setItems] = React.useState({});
  const [borderColor, setBorderColor] = useState('#d3d3d3');
  const [appType, setAppType] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [gender, setGender] = useState('');
  const [isSelected, setIsSelected] = useState([
    {
      id: 1,
      name: 'Male',
      selected: true,
    },
    {
      id: 2,
      name: 'Female',
      selected: false,
    },
  ]);

  const onRadioBtnClick = item => {
    let updatedState = isSelected.map(isSelectedItem =>
      isSelectedItem.id === item.id
        ? {...isSelectedItem, selected: true}
        : {...isSelectedItem, selected: false},
    );
    setIsSelected(updatedState);
    setGender(item.name);
    console.log(item.name);
  };

  useEffect(() => {}, []);

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

  const renderItem = item => {
    return (
      <TouchableOpacity style={s.item}>
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  function formatTimestamp(timestamp) {
    const now = moment();
    const date = moment(timestamp);
    if (now.isSame(date, 'day')) {
      return date.format('h:mm A');
    } else {
      return date.format('DD/mm/yyyy');
    }
  }

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
            Add Appointment
          </Text>
        </View>
        <View style={s.inputContainer}>
          {Form.map((item, index) => {
            if (item?.title === 'First Name') {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={[s.input, {flex: 0.4}]}>
                    <Input
                      w={'100%'}
                      variant="underlined"
                      placeholder={item?.title}
                      placeholderTextColor={textColor}
                      style={[s.inputText, {color: textColor}]}
                    />
                  </View>
                  <View style={[s.input, {flex: 0.4}]}>
                    <Input
                      w={'100%'}
                      variant="underlined"
                      placeholder={'Last Name'}
                      placeholderTextColor={textColor}
                      style={[s.inputText, {color: textColor}]}
                    />
                  </View>
                </View>
              );
            } else if (item?.title == 'Last Name') {
              null;
            } else if (item?.title == 'Contact No') {
              return (
                <View
                  style={[
                    s.input,
                    s.inputContainerStyle,
                    {
                      borderBottomColor: borderColor,
                    },
                  ]}>
                  <PhoneInput
                    initialCountry={'us'}
                    textProps={{
                      placeholder: 'Enter Phone Number',
                      placeholderTextColor: textColor,
                    }}
                    autoFormat={true}
                    pickerBackgroundColor={'#d3d3d3'}
                    textStyle={[s.inputStyle, {color: textColor}]}
                    isValidNumber={e => console.log(e, 'here')}
                    ref={phonenum}
                    onChangePhoneNumber={phNumber => {
                      if (phonenum.current.isValidNumber()) {
                        setBorderColor('#d3d3d3');
                      } else {
                        setBorderColor('red');
                      }
                    }}
                  />
                </View>
              );
            } else if (item?.title == 'Type Of Appointment') {
              return (
                <View>
                  <Menu
                    style={{width: '80%', left: moderateScale(90, 0.1)}}
                    borderWidth={moderateScale(1, 0.1)}
                    borderBottomColor={'#d3d3d3'}
                    backgroundColor={backColor}
                    // top={moderateScale(24, 0.1)}
                    borderColor={textColor}
                    left={moderateScale(10, 0.1)}
                    trigger={triggerProps => {
                      return (
                        <Pressable
                          accessibilityLabel="Type Of Appointment"
                          {...triggerProps}
                          style={s.pressable}>
                          <Text
                            style={[
                              s.inputText,
                              {width: '93%', color: textColor},
                            ]}>
                            {appType ? appType : 'Type of Appointment'}
                          </Text>
                          <DownArrow
                            name={'chevron-down'}
                            size={moderateScale(25, 0.1)}
                            color={'#d3d3d3'}
                          />
                        </Pressable>
                      );
                    }}>
                    {Appointment.map((v, i) => {
                      return (
                        <Menu.Item
                          style={{
                            width: moderateScale(350, 0.1),
                          }}
                          onPress={() => {
                            setAppType(v.id);
                          }}>
                          <Text style={[s.optionBtns, {color: textColor}]}>
                            {v.id}
                          </Text>
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </View>
              );
            } else if (item?.title == 'Date') {
              return (
                <View style={[s.input]}>
                  <TouchableOpacity
                    onPressIn={() => setOpenDate(true)}
                    style={[s.inputContainerStyle, s.dateInput]}>
                    <Text style={[s.inputText, {color: textColor}]}>
                      {selectedDate ? selectedDate : 'Date'}
                    </Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    mode={'date'}
                    open={openDate}
                    date={date}
                    onConfirm={dateTime => {
                      setOpenDate(false);
                      let formatedDate = moment(dateTime).format('YYYY-MM-DD');
                      console.log(formatedDate, 'formattedDate');
                      // setDate(formatedDate);
                      setSelectedDate(formatedDate);
                    }}
                    onCancel={() => {
                      setOpenDate(false);
                    }}
                  />
                </View>
              );
            } else if (item?.title == 'Time') {
              return (
                <View style={[s.input]}>
                  <TouchableOpacity
                    onPressIn={() => setOpenTime(true)}
                    style={[s.inputContainerStyle, s.dateInput]}>
                    <Text style={[s.inputText, {color: textColor}]}>
                      {selectedTime ? selectedTime : 'Time'}
                    </Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    mode={'time'}
                    open={openTime}
                    date={date}
                    onConfirm={dateTime => {
                      setOpenTime(false);
                      // setTime(dateTime);
                      let formattedTime = formatTimestamp(dateTime);
                      console.log(formattedTime, 'formattedDate');
                      setSelectedTime(formattedTime);
                    }}
                    onCancel={() => {
                      setOpenTime(false);
                    }}
                  />
                </View>
              );
            } else if (item?.title == 'Gender') {
              return (
                <View style={s.radioInput}>
                  <Text
                    style={[
                      s.btnText,
                      {color: textColor, fontSize: moderateScale(14, 0.1)},
                    ]}>
                    Gender
                  </Text>
                  {isSelected.map((item, i) => (
                    <View style={s.radio}>
                      <RadioButton
                        onPress={() => onRadioBtnClick(item)}
                        selected={item.selected}
                        key={item.id}>
                        {item.name}
                      </RadioButton>
                    </View>
                  ))}
                </View>
              );
            } else if (item?.title == 'Description') {
              return (
                <View style={s.description}>
                  <Text style={[s.btnText, s.textArea, {color: textColor}]}>
                    Description
                  </Text>
                  <TextArea
                    placeholder="Write Description here...."
                    w="100%"
                    placeholderTextColor={'#d3d3d3'}
                    variant={'unstyled'}
                    style={[s.inputText, {color: textColor}]}
                  />
                </View>
              );
            } else {
              return (
                <View style={[s.input]}>
                  <Input
                    w={'100%'}
                    variant="underlined"
                    placeholder={item?.title}
                    placeholderTextColor={textColor}
                    style={[s.inputText, {color: textColor}]}
                  />
                </View>
              );
            }
          })}

          <View style={s.btns}>
            <Button
              size="sm"
              onPressIn={async () => {
                console.log('create');
                if (selectedDate && selectedTime && appType) {
                  dispatch(
                    addEvent({
                      ...events,
                      [`${selectedDate}`]: [
                        {
                          name: appType,
                          time: selectedTime,
                        },
                      ],
                    }),
                  );
                  navigation.goBack();
                } else {
                  Alert.alert('Please select date and time');
                }
              }}
              variant={'solid'}
              style={s.btn}>
              <View style={s.btnView}>
                <Text style={s.btnText}>Create</Text>
              </View>
            </Button>
            <Button
              size="sm"
              onPressIn={async () => {
                setShowInviteModal(true);
              }}
              variant={'solid'}
              style={s.btn}>
              <View style={s.btnView}>
                <Text style={s.btnText}>Invite</Text>
              </View>
            </Button>
          </View>
        </View>
        <InviteModal
          modalVisible={showInviteModal}
          setModalVisible={setShowInviteModal}
        />
      </ScrollView>
    </View>
  );
};

export default AddAppointment;
{
  /* <View style={s.container}>
<Agenda
  items={items}
  loadItemsForMonth={loadItems}
  selected={'2022-07-07'}
  renderItem={renderItem}
/>
</View> */
}
