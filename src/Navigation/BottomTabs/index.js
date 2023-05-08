import {StyleSheet, Platform, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale} from 'react-native-size-matters';

import Book from 'react-native-vector-icons/Entypo';
import ChatIcon from 'react-native-vector-icons/Ionicons';
import Bulb from 'react-native-vector-icons/MaterialCommunityIcons';
import Event from 'react-native-vector-icons/MaterialIcons';
import Home from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeStack from '../Stacks/HomeStack';
import BOMStack from '../Stacks/BOMStack';
import InspireMeStack from '../Stacks/InspireMeStack';
import MessageStack from '../Stacks/InspireMeStack';
import ScheduleStack from '../Stacks/InspireMeStack';

const MonteseratBold = 'Montserrat-Bold';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: '#FDBC2C',
            width: '100%',
            height:
              Platform.OS == 'ios'
                ? moderateScale(100, 0.1)
                : moderateScale(75, 0.1),
            borderTopLeftRadius: moderateScale(15, 0.1),
            borderTopRightRadius: moderateScale(15, 0.1),
            elevation: 0,
            position: 'absolute',
          },
          null,
        ],
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={s.tab}>
              <Home
                name="home"
                color={focused ? 'grey' : '#fff'}
                solid
                size={moderateScale(26, 0.1)}
              />
              <Text style={[s.tabText, {color: focused ? 'grey' : '#fff'}]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'BOMStack'}
        component={BOMStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[s.tab, {marginTop: moderateScale(10, 0.1)}]}>
              <Book
                name="book"
                color={focused ? 'grey' : '#fff'}
                solid
                size={moderateScale(26, 0.1)}
              />
              <Text style={[s.tabText, {color: focused ? 'grey' : '#fff'}]}>
                Book of The Month
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'InspireMeStack'}
        component={InspireMeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={s.tab}>
              <Bulb
                name="lightbulb-on-outline"
                color={focused ? 'grey' : '#fff'}
                solid
                size={moderateScale(26, 0.1)}
              />
              <Text style={[s.tabText, {color: focused ? 'grey' : '#fff'}]}>
                Inspire Me
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'MessageStack'}
        component={MessageStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={s.tab}>
              <ChatIcon
                name="md-chatbubble-ellipses"
                color={focused ? 'grey' : '#fff'}
                solid
                size={moderateScale(26, 0.1)}
              />
              <Text style={[s.tabText, {color: focused ? 'grey' : '#fff'}]}>
                Messages
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'ScheduleStack'}
        component={ScheduleStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={s.tab}>
              <Event
                name="event"
                color={focused ? 'grey' : '#fff'}
                solid
                size={moderateScale(26, 0.1)}
              />
              <Text style={[s.tabText, {color: focused ? 'grey' : '#fff'}]}>
                Schedule
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const s = StyleSheet.create({
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabText: {
    marginTop: moderateScale(5, 0.1),
    fontSize: moderateScale(9, 0.1),

    fontFamily: MonteseratBold,
    textAlign: 'center',
  },
  addTab: {
    backgroundColor: '#FFD700',
    // padding: moderateScale(10, 0.1),
    width: moderateScale(50, 0.1),
    height: moderateScale(50, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(50, 0.1),
    borderRadius: moderateScale(25, 0.1),
  },
});
