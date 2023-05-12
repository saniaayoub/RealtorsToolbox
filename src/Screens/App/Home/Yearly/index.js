import {Text, View, ScrollView} from 'react-native';
import {Button, Input, Menu, Pressable, TextArea} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {setTheme, setUserToken} from '../../../../Redux/actions';
import HeaderTabs from '../../../../Components/headerTabs';
import Header from '../../../../Components/header';
import DownArrow from 'react-native-vector-icons/Entypo';
import InviteModal from '../../../../Components/invitationModal';

const Form = [
  {title: 'Year', color: ['#FAFF00', '#ffffff']},
  {title: 'Target', color: ['#00FFB2', '#ffffff']},
  {title: 'Sales', color: ['#FF9900', '#ffffff']},
  {title: 'Pending', color: ['#00F0FF', '#ffffff']},
  {title: 'Commission Earned', color: ['#FF00F5', '#ffffff']},
  {title: 'No. of Properties', color: ['#00F0FF', '#ffffff']},
  {title: 'No. of Booking', color: ['#FF00F5', '#ffffff']},
];

const Year = [
  {year: '1999'},
  {year: '2000'},
  {year: '2001'},
  {year: '2002'},
  {year: '2003'},
  {year: '2004'},
  {year: '2005'},
  {year: '2006'},
  {year: '2007'},
  {year: '2008'},
  {year: '2009'},
  {year: '2011'},
  {year: '2012'},
  {year: '2013'},
  {year: '2014'},
  {year: '2015'},
  {year: '2016'},
  {year: '2017'},
  {year: '2018'},
  {year: '2019'},
  {year: '2020'},
  {year: '2021'},
  {year: '2022'},
  {year: '2023'},
];
const Yearly = ({navigation}) => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const [year, setYear] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);

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
          <Text style={[s.headingText, {color: textColor}]}>Yearly</Text>
        </View>
        <View style={s.inputContainer}>
          {Form.map((item, index) => {
            if (item?.title == 'Year') {
              return (
                <LinearGradient
                  colors={item?.color}
                  start={{x: 0.5, y: 0.5}}
                  end={{x: 1.0, y: 1.0}}
                  style={[s.item]}>
                  <View style={[s.gradientView, {backgroundColor: backColor}]}>
                    <Menu
                      style={{width: '100%'}}
                      borderWidth={moderateScale(1, 0.1)}
                      borderBottomColor={'#d3d3d3'}
                      backgroundColor={backColor}
                      marginLeft={moderateScale(80, 0.1)}
                      borderColor={textColor}
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="Year"
                            {...triggerProps}
                            style={s.pressable}>
                            <Text
                              style={[
                                s.inputText,
                                {width: '93%', color: textColor},
                              ]}>
                              {year ? year : 'Year'}
                            </Text>
                            <DownArrow
                              name={'chevron-down'}
                              size={moderateScale(25, 0.1)}
                              color={'#d3d3d3'}
                            />
                          </Pressable>
                        );
                      }}>
                      {Year.map((v, i) => {
                        return (
                          <Menu.Item
                            style={s.menuItem}
                            onPress={() => {
                              setYear(v.year);
                            }}>
                            <Text style={[s.optionBtns, {color: textColor}]}>
                              {v.year}
                            </Text>
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  </View>
                </LinearGradient>
              );
            } else {
              return (
                <LinearGradient
                  colors={item?.color}
                  start={{x: 0.5, y: 0.5}}
                  end={{x: 1.0, y: 1.0}}
                  style={[s.item]}>
                  <View style={[s.gradientView, {backgroundColor: backColor}]}>
                    <Input
                      w={'100%'}
                      variant="unstyled"
                      placeholder={item?.title}
                      placeholderTextColor={textColor}
                      style={[s.inputText, {color: textColor}]}
                    />
                  </View>
                </LinearGradient>
              );
            }
          })}
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
        <InviteModal
          modalVisible={showInviteModal}
          setModalVisible={setShowInviteModal}
        />
      </ScrollView>
    </View>
  );
};

export default Yearly;
