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
} from 'react-native';
import {Button} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/header';
import {setTheme, setUserToken} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import Video from 'react-native-video';

const InspireMe = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

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
          <Text style={[s.headingText1, {color: textColor}]}>Inspire Me</Text>
        </View>
        <View>
          <Video
            source={{
              uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
            }}
            paused={!isPlaying}
            controls={true}
            style={s.backgroundVideo}
            muted={isMuted}
          />
          <Button
            size="sm"
            variant={'link'}
            onPressIn={() => navigation.navigate('Register')}>
            {/* <View style={s.link}>
              <Icon />
            </View> */}
          </Button>
          {/* <Button
            onPress={() => setIsMuted(m => !m)}
            title={isMuted ? 'Unmute' : 'Mute'}
          /> */}
        </View>
        <View>
          <Video
            source={{
              uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
            }}
            paused={!isPlaying}
            controls={true}
            style={s.backgroundVideo}
            muted={isMuted}
          />
          <Button
            size="sm"
            variant={'link'}
            onPressIn={() => navigation.navigate('Register')}>
            {/* <View style={s.link}>
              <Icon />
            </View> */}
          </Button>
          {/* <Button
            onPress={() => setIsMuted(m => !m)}
            title={isMuted ? 'Unmute' : 'Mute'}
          /> */}
        </View>
        {/* <View>
        //   <Video
        //     source={{
        //       uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
        //     }} // the video file
        //     paused={false} // make it start
        //     style={s.backgroundVideo} // any style you want
        //     repeat={true} // make it a loop
        //   />
        // </View> */}
      </ScrollView>
    </View>
  );
};

export default InspireMe;
