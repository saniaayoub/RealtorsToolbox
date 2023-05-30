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
import Edit from 'react-native-vector-icons/MaterialCommunityIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-date-picker';
import RadioButton from '../../../../Components/radio';
import InviteModal from '../../../../Components/invitationModal';
import dummyImg from '../../../../assets/images/png/dummyImg1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from '../../../../Components/imagePickerModal';
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
  const [showPass, setshowPass] = useState(true);
  const [showCamera, setShowCamera] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);
  const [disable4, setDisable4] = useState(false);
  const [disable5, setDisable5] = useState(false);

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

    console.log(item.name);
  };

  useEffect(() => {}, []);

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

            <TouchableOpacity
              style={[
                s.iconCircle,
                {position: 'absolute', bottom: 0, right: 0},
              ]}
              onPressIn={async () => {
                setShowCamera(true);
              }}>
              <Edit
                name={'account-edit'}
                size={moderateScale(20, 0.1)}
                color={'#fff'}
              />
            </TouchableOpacity>
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
              isReadOnly={!disable1}
              isFocused={disable1}
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
                <TouchableOpacity
                  onPress={() => {
                    setDisable1(!disable1);
                  }}
                  style={s.iconCircle}>
                  <Edit
                    name={'account-edit'}
                    color={textColor}
                    size={moderateScale(20, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>

          <View style={[s.input]}>
            <Input
              w="100%"
              isReadOnly={!disable2}
              isFocused={disable2}
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
                <TouchableOpacity
                  onPress={() => {
                    setDisable2(!disable2);
                  }}
                  style={s.iconCircle}>
                  <Edit
                    name={'account-edit'}
                    color={textColor}
                    size={moderateScale(20, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          <View style={[s.input]}>
            <Input
              w="100%"
              isReadOnly={!disable3}
              isFocused={disable3}
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
                <TouchableOpacity
                  onPress={() => {
                    setDisable3(!disable3);
                  }}
                  style={s.iconCircle}>
                  <Edit
                    name={'account-edit'}
                    color={textColor}
                    size={moderateScale(20, 0.1)}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          <View style={[s.input]}>
            <Input
              secureTextEntry={showPass}
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
                <TouchableOpacity
                  onPress={() => {
                    setshowPass(!showPass);
                  }}
                  style={s.iconCircle}>
                  <Edit
                    name={'eye'}
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
              disabled={!disable4}
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
                setDisable4(!disable4);
                if (!disable4) {
                  setBorderColor('#33A9C4');
                } else {
                  setBorderColor('#D3D3D3');
                }
              }}>
              <Edit
                name={'account-edit'}
                color={textColor}
                size={moderateScale(20, 0.1)}
              />
            </TouchableOpacity>
          </View>

          <View style={[s.input]}>
            <Input
              w="100%"
              isReadOnly={!disable5}
              isFocused={disable5}
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
                <TouchableOpacity
                  onPress={() => {
                    setDisable5(!disable5);
                  }}
                  style={s.iconCircle}>
                  <Edit
                    name={'account-edit'}
                    color={textColor}
                    size={moderateScale(20, 0.1)}
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
                Alert.alert('Information Updated');
              }}
              variant={'solid'}
              style={s.btn}>
              <Text style={s.btnText}>Save</Text>
            </Button>
          </View>

          <ImagePicker
            modalVisible={showCamera}
            setModalVisible={setShowCamera}
            screen={'Update Profile'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
