import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
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
import VideoPlayer from 'react-native-video-player';
// import Orientation from 'react-native-orientation';

const InspireMe = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const [like, setLike] = useState(false);
  const [video, setVideo] = useState({
    uri: '',
  });
  const MonteseratBold = 'Montserrat-Bold';
  const MonteseratRegular = 'Montserrat-Regular';
  const MonteseratLight = 'Montserrat-Light';

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
          {[1, 2, 3].map((v, i) => {
            return (
              <View key={i}>
                <View style={s.backgroundVideo}>
                  <VideoPlayer
                    video={require('../../../assets/video/video.mp4')}
                    thumbnail={require('../../../assets/images/png/videoBack.png')}
                    endThumbnail={require('../../../assets/images/png/videoBack.png')}
                    style={s.video}
                    resizeMode="cover"
                    customStyles={{
                      controlBar: {
                        backgroundColor: '#B6B6B6',
                        borderRadius: 10,
                      },

                      video: {
                        // display: 'flex',
                        borderRadius: moderateScale(14, 0.1),
                      },
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      console.log(i, 'index');
                      setLike(!like);
                    }}
                    style={s.heart}>
                    <Heart
                      name="heart-circle"
                      size={moderateScale(30, 0.1)}
                      color={like == false ? '#FDBC2C' : 'red'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={s.share}>
                    <Share
                      name="share-square-o"
                      size={moderateScale(20, 0.1)}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <View style={s.dhouse}>
                    <Text style={[s.text, {color: textColor}]}>
                      Your Dream Houses
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={[s.caption, {color: textColor}]}>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard
                    dummy.is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard
                    dummy.
                  </Text>
                </View>
                <View>
                  <Text style={s.datePosted}>Posted On 14-Sep-2022</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default InspireMe;
