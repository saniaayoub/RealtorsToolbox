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
import Play from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/FontAwesome';
import VideoBack from '../../../assets/images/png/videoBack.png';
import Videomp4 from '../../../assets/video/video.mp4';
import Video from 'react-native-video';

const InspireMe = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {}, []);

  return (
    <View style={[s.mainContainer, {backgroundColor: backColor}]}>
      <Header navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor: backColor}]}>
        <View style={s.mB}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading]}>
          <Text style={[s.headingText1, {color: textColor}]}>Inspire Me</Text>
        </View>

        <View style={s.videos}>
          {[1, 2, 3].map((item, index) => (
            <View key={index}>
              <View style={s.backgroundVideo}>
                {/* <Video
                  source={Videomp4}
                  paused={!isPlaying}
                  controls={true}
                  style={s.video}
                  // style={s.backgroundVideo}
                  muted={isMuted}
                /> */}
                <Image
                  source={VideoBack}
                  resizeMode="cover"
                  style={[s.backgroundVideo, {position: 'absolute'}]}
                />

                <Button
                  size="sm"
                  variant={'link'}
                  onPress={() => console.log('heart')}>
                  <View style={s.heart}>
                    <Heart
                      name="heart-circle"
                      size={moderateScale(40, 0.1)}
                      color={'#FDBC2C'}
                      solid
                      style={s.heartIcon}
                    />
                  </View>
                </Button>
                <Button
                  size="sm"
                  variant={'link'}
                  onPress={() => setIsPlaying(m => !m)}>
                  <View>
                    <Play
                      name="play-circle"
                      size={moderateScale(60, 0.1)}
                      color={'#fff'}
                      solid
                    />
                  </View>
                </Button>

                <View style={[s.heading]}>
                  <Text
                    style={[s.headingText1, s.postText, {color: textColor}]}>
                    Your Dream Houses
                  </Text>
                </View>
                <Button
                  size="sm"
                  variant={'link'}
                  onPress={() => console.log('share')}>
                  <View style={[s.share]}>
                    <Share
                      name="share-square-o"
                      size={moderateScale(20, 0.1)}
                      color={'#fff'}
                      solid
                      style={s.heartIcon}
                    />
                  </View>
                </Button>
              </View>
              <View>
                <Text style={[s.caption, {color: textColor}]}>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy.is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy.
                </Text>
              </View>
              <View>
                <Text style={s.datePosted}>Posted On 14-Sep-2022</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default InspireMe;
