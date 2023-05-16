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
import {setTheme, setUserToken} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import Header from '../../../Components/header';
import Edit from 'react-native-vector-icons/Entypo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-date-picker';
import RadioButton from '../../../Components/radio';
import InviteModal from '../../../Components/invitationModal';
import dummyImg from '../../../assets/images/png/dummyImg1.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

const UserSettings = ({navigation}) => {
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
          <Text style={[s.headingText, {color: textColor}]}>Settings</Text>
        </View>
        <View style={s.inputContainer}>
          <TouchableOpacity style={[s.input]}>
            <Input
              w="100%"
              isReadOnly
              variant="underlined"
              placeholder={'Edit profile'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon
                    name={'user-edit'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[s.input]}>
            <Input
              w="100%"
              isReadOnly
              variant="underlined"
              placeholder={'Privacy'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon2
                    name={'privacy-tip'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[s.input]}>
            <Input
              w="100%"
              isReadOnly
              variant="underlined"
              placeholder={'Help'}
              placeholderTextColor={textColor}
              InputLeftElement={
                <View style={s.icon}>
                  <Icon1
                    name={'help-circle'}
                    color={textColor}
                    size={moderateScale(22, 0.1)}
                  />
                </View>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[s.input]}>
            <Input
              isReadOnly
              value={'Resest Password'}
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
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[s.input]}>
            <Input
              isReadOnly
              value={'Package Details'}
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
              style={[s.inputText, {color: textColor}]}
            />
          </TouchableOpacity>

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

export default UserSettings;
