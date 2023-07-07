import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
} from 'react-native';
import {Button, Input} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import Edit from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-date-picker';
import RadioButton from '../../../../Components/radio';
import {postApi} from '../../../../APIs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from '../../../../Components/imagePickerModal';
import Feather from 'react-native-vector-icons/Feather';
import {AppContext, useAppContext} from '../../../../Context/AppContext';
import {
  backDark,
  textDark,
  backLight,
  textLight,
  dummyImage,
} from '../../../../Constants';
import Loader from '../../../../Components/Loader';

const Form = {
  id: '',
  first_name: '',
  about: '',
  email: '',
  password: '',
  address: '',
  gender: '',
  user_img: '',
  phone: '',
  latitude: '',
  longitude: '',
};

const UserProfile = ({navigation}) => {
  const phonenum = useRef();
  const {theme, token, loader, setLoader} = useAppContext(AppContext);
  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;
  const [borderColor, setBorderColor] = useState('#d3d3d3');
  const [username, setUsername] = useState('John Smith');
  const [about, setAbout] = useState('');
  const [form, setForm] = useState(Form);
  const [filePath, setFilePath] = useState('');
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
  };

  useEffect(() => {
    // console.log(filePath, 'path');
    setForm({...form, user_img: filePath});
  }, [filePath]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setLoader(true);
    const res = await postApi('profile', {}, token);
    if (res?.success) {
      setUserData(res?.data);
    }
    setLoader(false);
  };

  const setUserData = async data => {
    for (let item of Object.keys(Form)) {
      Form[item] = data[item];
      if (
        item == 'updated_at' ||
        item == 'type' ||
        item == 'created_at' ||
        item == 'otp' ||
        item == 'email_verified_at' ||
        item == 'code' ||
        item == 'status'
      ) {
        console.log('do nothing');
      }
      if (item == 'gender') {
        let updatedState = isSelected.map(isSelectedItem =>
          isSelectedItem.name == data[item]
            ? {...isSelectedItem, selected: true}
            : {...isSelectedItem, selected: false},
        );
        setIsSelected(updatedState);
      } else {
        Form[item] = data[item];
      }
    }
    console.log(Form, 'user data');
    setForm(Form);
    setAbout(Form?.about);
    setUsername(Form?.first_name);
  };

  const updateUserData = async () => {
    Keyboard.dismiss();
    setLoader(true);
    // console.log(form, 'form');
    const res = await postApi('user-update', form, token);
    // console.log(res, 'return');
    if (res?.success) {
      Alert.alert(res?.messsage);
      setAbout(form?.about);
      setUsername(form?.first_name);
    } else {
      Alert.alert(res?.data?.message);
    }
    setLoader(false);
  };

  const EditIcon = ({setDisable, disable}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDisable(!disable);
        }}
        style={s.iconCircle}>
        <Edit
          name={'account-edit'}
          color={textColor}
          size={moderateScale(20, 0.1)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      {loader ? <Loader /> : null}
      <Header navigation={navigation} />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={s.tabs}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading, {borderBottomColor: textColor}]}>
          <View style={[s.dp]}>
            <Image
              source={{uri: form?.user_img ? form?.user_img : dummyImage}}
              style={s.dp}
              resizeMode={'cover'}
            />
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
          <Text style={[s.headingText, {color: textColor}]}>{username}</Text>
          <Text style={[s.textRegular, {color: textColor}]}>{about}</Text>
        </View>
        <View style={s.inputContainer}>
          <View style={[s.input]}>
            <Input
              w="100%"
              isReadOnly={!disable1}
              isFocused={disable1}
              variant="underlined"
              value={form?.first_name}
              placeholder={'Full Name'}
              onChangeText={text => {
                setForm({...form, first_name: text});
              }}
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
                <EditIcon setDisable={setDisable1} disable={disable1} />
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
              value={form.about}
              placeholder={'About me'}
              onChangeText={text => {
                setForm({...form, about: text});
              }}
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
                <EditIcon setDisable={setDisable2} disable={disable2} />
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          <View style={[s.input]}>
            <Input
              w="100%"
              isDisabled
              isReadOnly={true}
              // isFocused={disable3}
              variant="underlined"
              value={form.email}
              placeholder={'Email'}
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
                <EditIcon setDisable={setDisable3} disable={disable3} />
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          {/* <View style={[s.input]}>
            <Input
              secureTextEntry={showPass}
              value={'password'}
              w="100%"
              variant="underlined"
              placeholder={'Password'}
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
                  style={s.iconCircle}
                  onPress={() => setshowPass(!showPass)}>
                  <Feather
                    name={showPass ? 'eye' : 'eye-off'}
                    color={textColor}
                    size={13}
                  />
                </TouchableOpacity>
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View> */}

          <View style={[s.input]}>
            <Input
              w="100%"
              isReadOnly={!disable5}
              isFocused={disable5}
              variant="underlined"
              value={form?.address}
              onChangeText={text => {
                setForm({...form, address: text});
              }}
              placeholder={'Address'}
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
                <EditIcon setDisable={setDisable5} disable={disable5} />
              }
              style={[s.inputText, {color: textColor}]}
            />
          </View>
          {form?.phone ? (
            <View
              style={[
                s.input,
                s.phone,
                {
                  borderBottomColor: borderColor,
                },
              ]}>
              <PhoneInput
                disabled={!disable4}
                initialCountry={'us'}
                initialValue={form?.phone}
                textProps={{
                  placeholder: 'Enter* Phone Number',
                  placeholderTextColor: textColor,
                }}
                autoFormat={true}
                pickerBackgroundColor={'#d3d3d3'}
                textStyle={[s.inputStyle, {color: textColor}]}
                isValidNumber={e => console.log(e, 'here')}
                ref={phonenum}
                onChangePhoneNumber={phNumber => {
                  setForm({...form, phone: phonenum.current.getValue()});
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
          ) : null}
          <View style={s.radioInput}>
            <Text
              style={[
                s.btnText,
                {color: textColor, fontSize: moderateScale(14, 0.1)},
              ]}>
              Gender
            </Text>
            {isSelected.map((item, i) => (
              <View key={i} style={s.radio}>
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
                updateUserData();
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
            setFilePath={setFilePath}
            setLoader={setLoader}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
