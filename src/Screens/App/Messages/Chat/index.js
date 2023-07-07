import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import s from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Inicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import {AppContext, useAppContext} from '../../../../Context/AppContext';
import {Input, FormControl, Button} from 'native-base';
import {backDark, textDark, backLight, textLight} from '../../../../Constants';

const messages = [
  {
    uid: 2,
    from: 'Julie Watson',
    to: '',
    date: '',
    text: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
    userImage: require('../../../../assets/images/png/dummyImg1.png'),
  },
];

const Chat = ({navigation, route}) => {
  const {theme} = useAppContext(AppContext);
  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;
  const uid = 1;
  const [text, setText] = useState('');

  const renderItem = (elem, i) => {
    if (elem?.item?.uid === uid) {
      return (
        <View style={s.messege} key={i}>
          <View
            style={[
              s.text,
              {
                flex: 0.8,
                backgroundColor: '#333232',
                marginRight: moderateScale(10, 0.1),
              },
            ]}>
            <Text style={s.userName}>
              {elem?.item?.from}
              <Text style={s.textSmall1}>{elem?.text}</Text>
            </Text>
          </View>
          <View style={[s.dp, {flex: 0.2}]}>
            <Image
              source={elem?.item?.userImage}
              style={s.dp1}
              resizeMode={'cover'}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={s.messege} key={i}>
          <View style={[s.dp, {flex: 0.2}]}>
            <Image
              source={elem?.item?.userImage}
              style={s.dp1}
              resizeMode={'cover'}
            />
          </View>
          <View style={[s.text, {flex: 0.8}]}>
            <Text style={s.userName}>
              {elem?.from}
              <Text style={s.textSmall1}>{elem?.item?.text}</Text>
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView
      style={{display: 'flex', flex: 1, backgroundColor: backColor}}>
      <View style={[s.container, {backgroundColor: backColor}]}>
        <View style={s.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{marginVertical: moderateScale(25, 0.1)}}>
            <Icon1
              name="leftcircle"
              size={moderateScale(30, 0.1)}
              color={textColor}
              solid
            />
          </TouchableOpacity>
          <View style={s.card}>
            <TouchableOpacity onPress={() => {}} style={s.dp2}>
              <Image
                source={messages[0].userImage}
                style={s.dp2}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={[s.name, {color: textColor}]}>
                {messages[0].from}
              </Text>

              <Text style={s.textSmall}>Last Seen 5:52 PM</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={s.options}>
            <Entypo
              name={'dots-three-vertical'}
              color={textColor}
              size={moderateScale(15, 0.1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            s.sendToContainer,
            {
              borderColor: textColor,
              borderBottomColor: textColor,
              paddingBottom: moderateScale(10, 0.1),
            },
          ]}>
          <Icon2
            name="chevron-left"
            size={moderateScale(30, 0.1)}
            color={textColor}
            solid
          />
          {[
            {name: 'John Smith'},
            {name: 'Ava Smith'},
            {name: 'Emily Smith'},
          ].map(elem => {
            return (
              <View
                style={[
                  s.sendToView,
                  {
                    borderColor: textColor,
                  },
                ]}>
                <Text
                  style={[
                    s.sendTO,
                    s.name,
                    {
                      color: '#fff',
                    },
                  ]}>
                  {elem?.name.substring(0, 1)}
                </Text>
                <Text
                  style={[
                    s.textRegular,
                    {
                      marginLeft: moderateScale(5, 0.1),
                      textAlign: 'center',
                      color: textColor,
                    },
                  ]}>
                  {elem?.name}
                </Text>
              </View>
            );
          })}
        </View>
        <FlatList
          // inverted
          contentContainerStyle={{flexDirection: 'column'}}
          data={messages}
          renderItem={renderItem}
          // keyExtractor={(item, index) => index}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={false}
          showsVerticalScrollIndicator={true}
        />
      </View>
      <View style={s.row}>
        <View style={s.input}>
          <TouchableOpacity style={s.circle}>
            <Icon
              name={'smile'}
              color={'#8F8A8A'}
              solid
              size={moderateScale(20, 0.1)}
            />
          </TouchableOpacity>
          <View style={s.inputText}>
            <Input
              w={'80%'}
              variant="unstyled"
              placeholderTextColor={'#fff'}
              color={'#fff'}
              placeholder="Type Message"
              onChangeText={v => setText(v)}
              size="md"
            />
          </View>

          <TouchableOpacity style={s.attach}>
            <Entypo
              name={'attachment'}
              color={'#8F8A8A'}
              size={moderateScale(20, 0.1)}
            />
          </TouchableOpacity>
        </View>
        <View style={s.sendBtn}>
          <TouchableOpacity style={s.circle}>
            <Inicon
              name={'md-send'}
              color={'#8F8A8A'}
              size={moderateScale(20, 0.1)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
