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
import {Button, Input, TextArea} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/header';
import {setTheme, setUserToken} from '../../../Redux/actions';
import HeaderTabs from '../../../Components/headerTabs';
import Heart from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/FontAwesome';
import Comments from 'react-native-vector-icons/FontAwesome5';
import Send from 'react-native-vector-icons/MaterialIcons';
import Book from '../../../assets/images/png/book.png';
import LinearGradient from 'react-native-linear-gradient';

const BookoftheMonth = ({navigation}) => {
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
        contentContainerStyle={{
          paddingBottom: moderateScale(100, 0.1),
          backgroundColor: backColor,
        }}>
        <View style={{marginBottom: moderateScale(15, 0.1)}}>
          <HeaderTabs navigation={navigation} />
        </View>
        <View style={[s.heading]}>
          <Text style={[s.headingText1, {color: textColor}]}>
            Book Of The Month
          </Text>
        </View>
        <View style={s.row}>
          <View style={[s.col1, s.img]}>
            <Image source={Book} resizeMode="cover" style={s.book} />
          </View>
          <View style={s.col1}>
            <View style={s.bookTitle}>
              <Text style={[s.headingText1, {color: textColor}]}>
                Book Of the Month Title
              </Text>
            </View>

            <Text style={[s.caption, {color: textColor}]}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy.is simply dummy
              text of the printing and typesetting industry.
            </Text>

            <View style={[s.row, s.icons]}>
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
          </View>
        </View>

        <View>
          <LinearGradient
            colors={['grey', '#FFFFFF', '#000000']}
            start={{x: 0.5, y: 0, z: 0.6}}
            end={{x: 1.0, y: 1.0, z: 1.0}}
            style={[s.item]}>
            <View style={[s.gradientView, {backgroundColor: backColor}]}>
              <Button
                size="sm"
                variant={'link'}
                onPress={() => console.log('commments')}>
                <View style={[s.row, s.center]}>
                  <Comments
                    name="comments"
                    size={moderateScale(26, 0.1)}
                    color={'#FDBC2C'}
                    solid
                  />
                  <Text style={[s.headingText, {color: textColor}]}>
                    14 Comments
                  </Text>
                </View>
              </Button>
              <Text style={[s.userTitle, {color: textColor}]}>John Smith</Text>

              <Text style={s.datePosted}>17-May-2022</Text>

              <Text
                style={[
                  s.caption,
                  {marginLeft: moderateScale(10, 0.1), color: textColor},
                ]}>
                is simply dummy text of the printing is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </Text>

              <View style={[s.row, s.inputArea]}>
                <Comments
                  name="user-alt"
                  size={moderateScale(26, 0.1)}
                  color={textColor}
                  solid
                />
                <View style={s.input}>
                  <TextArea
                    h={moderateScale(100, 0.1)}
                    placeholder="Share Your Comments...."
                    w="80%"
                    variant={'unstyled'}
                    backgroundColor={'#5A5A5A'}
                    style={{color: '#fff'}}
                    InputRightElement={
                      <View style={s.send}>
                        <TouchableOpacity onPress={() => console.log('send')}>
                          <Send
                            name={'send'}
                            color={'#8F8A8A'}
                            size={moderateScale(20, 0.1)}
                          />
                        </TouchableOpacity>
                      </View>
                    }
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookoftheMonth;
{
  /* <View style={s.videos}>
          {[1, 2, 3].map((item, index) => (
            <View key={index}>
              <View style={s.backgroundVideo}> */
}
{
  /* <Video
                  source={Videomp4}
                  paused={!isPlaying}
                  controls={true}
                  style={s.video}
                  // style={s.backgroundVideo}
                  muted={isMuted}
                /> */
}
// <Image
//   source={VideoBack}
//   resizeMode="contain"
//   style={[s.backgroundVideo, {position: 'absolute'}]}
// />

{
  /* <Button
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
</Button> */
}
// <Button
//   size="sm"
//   variant={'link'}
//   onPress={() => setIsPlaying(m => !m)}>
//   <View>
//     <Play
//       name="play-circle"
//       size={moderateScale(60, 0.1)}
//       color={'#fff'}
//       solid
//     />
//   </View>
// </Button>

// <View style={[s.heading]}>
//   <Text
//     style={[s.headingText1, s.postText, {color: textColor}]}>
//     Your Dream Houses
//   </Text>
// </View>
{
  /* <Button
  size="sm"
  variant={'link'}
  onPress={() => console.log('heart')}>
  <View style={[s.share]}>
    <Share
      name="share-square-o"
      size={moderateScale(20, 0.1)}
      color={'#fff'}
      solid
      style={s.heartIcon}
    />
  </View>
</Button> */
}
{
  /* <Button
            onPress={() => setIsMuted(m => !m)}
            title={isMuted ? 'Unmute' : 'Mute'}
          /> */
}
//       </View>
//       <View>
//         <Text style={[s.caption, {color: textColor}]}>
//           is simply dummy text of the printing and typesetting industry.
//           Lorem Ipsum has been the industry's standard dummy.is simply
//           dummy text of the printing and typesetting industry. Lorem
//           Ipsum has been the industry's standard dummy.
//         </Text>
//       </View>
// <View>
//   <Text style={s.datePosted}>Posted On 14-Sep-2022</Text>
// </View>
//     </View>
//   ))}
// </View>
