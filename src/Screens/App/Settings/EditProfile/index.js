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
import {Button, Input, Menu, Pressable, TextArea} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {setTheme, setUserToken} from '../../../../Redux/actions';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import Edit from 'react-native-vector-icons/Entypo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-date-picker';
import RadioButton from '../../../../Components/radio';
import InviteModal from '../../../../Components/invitationModal';
import dummyImg from '../../../../assets/images/png/dummyImg1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';
// import Icon2 from 'react-native-vector-icons/Fontisto';
const Form = {
  fullName: 'John Smith',
  bio: 'My Property My Rules',
  email: 'example@gmail.com',
  password: 'password',
  phNumber: '+123-465-789-00',
  location: 'USA',
  gender: 'Male',
};

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const phonenum = useRef();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';

  const [borderColor, setBorderColor] = useState('#d3d3d3');
  const [appType, setAppType] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
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

  useEffect(() => {
    dispatch(setTheme('dark'));
  }, []);

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={s.tabs}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading, {borderBottomColor: textColor}]}>
          <View style={[s.dp]}>
            <Image source={dummyImg} style={s.dp} resizeMode={'cover'} />
          </View>
          <Text style={[s.headingText, {color: textColor}]}>John Smith</Text>
          <Text style={[s.textRegular, {color: textColor}]}>
            My Property My Rules
          </Text>
        </View>
        <View style={s.inputContainer}>
          <View style={[s.input]}>
            <Input
              w="100%"
              variant="underlined"
              placeholder={Form.fullName}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon
                    name={'user'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              InputRightElement={
                <TouchableOpacity style={s.iconCircle}>
                  <Edit
                    name={'edit'}
                    color={textColor}
                    size={moderateScale(12, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>

          <View style={[s.input]}>
            <Input
              w="100%"
              variant="underlined"
              placeholder={Form.bio}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'information'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              InputRightElement={
                <TouchableOpacity style={s.iconCircle}>
                  <Edit
                    name={'edit'}
                    color={textColor}
                    size={moderateScale(12, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          <View style={[s.input]}>
            <Input
              w="100%"
              variant="underlined"
              placeholder={Form.email}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'email'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              InputRightElement={
                <TouchableOpacity style={s.iconCircle}>
                  <Edit
                    name={'edit'}
                    color={textColor}
                    size={moderateScale(12, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          <View style={[s.input]}>
            <Input
              secureTextEntry
              value={'password'}
              w="100%"
              variant="underlined"
              placeholder={Form.password}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'lock'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              InputRightElement={
                <TouchableOpacity style={s.iconCircle}>
                  <Edit
                    name={'edit'}
                    color={textColor}
                    size={moderateScale(12, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          <View
            style={[
              s.input,
              {
                borderBottomWidth: 1,
                paddingBottom: moderateScale(15, 0.1),
                paddingTop: moderateScale(10, 0.1),
                borderBottomColor: borderColor,
              },
            ]}>
            <PhoneInput
              initialCountry={'us'}
              initialValue="+123-465-789-00"
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
            <TouchableOpacity
              style={[
                s.iconCircle,
                {
                  position: 'absolute',
                  right: 0,
                  top: moderateScale(10, 0.1),
                },
              ]}
              onPress={() => {
                // setDisable4(!disable4);
                // if (!disable4) {
                //   setBorderColor('#33A9C4');
                // } else {
                //   setBorderColor(greyColor);
                // }
              }}>
              <Edit
                name={'edit'}
                color={textColor}
                size={moderateScale(12, 0.1)}
              />
            </TouchableOpacity>
          </View>

          <View style={[s.input]}>
            <Input
              w="100%"
              variant="underlined"
              placeholder={Form.location}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon2
                    name={'location-pin'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              InputRightElement={
                <TouchableOpacity style={s.iconCircle}>
                  <Edit
                    name={'edit'}
                    color={textColor}
                    size={moderateScale(12, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
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
          <View style={s.btns}>
            <Button
              size="sm"
              onPressIn={async () => {
                dispatch(setUserToken('sania'));
              }}
              variant={'solid'}
              style={s.btn}>
              <View style={s.btnView}>
                <Text style={s.btnText}>Save</Text>
              </View>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
