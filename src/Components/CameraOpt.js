import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {moderateScale} from 'react-native-size-matters';
import Image1 from '../assets/images/png/imagepicker.png';
import RNFS from 'react-native-fs';
import {postApi} from '../APIs';
import {AppContext, useAppContext} from '../Context/AppContext';

const CameraOpt = ({setFilePath, setModalVisible}) => {
  const [open, setOpen] = useState(false);
  const {setLoader, token} = useAppContext(AppContext);

  const convertToBase64 = async image => {
    setModalVisible(false);
    setLoader(true);
    await RNFS.readFile(image, 'base64')
      .then(res => {
        let base64 = `data:image/png;base64,${res}`;
        getImgUrl(base64, setFilePath);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  };

  const getImgUrl = async base64 => {
    let data = {
      image: base64,
    };
    const res = await postApi('image-upload-64', data, token);
    const image = res?.data?.image_url;
    if (image) {
      setFilePath(image);
    } else {
      Alert.alert(res?.data?.message);
    }
    setLoader(false);
  };

  const requestExternalReadPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'External Storage Read Permission',
            message: 'App needs read permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Read permission err', err);
      }
      return false;
    } else return true;
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const openCamera = async c => {
    let isCameraPermitted = await requestCameraPermission();

    if (c == 'g') {
      launchImageLibrary({
        width: 300,
        height: 400,
        cropping: true,
        freeStyleCropEnabled: true,
        saveToPhotos: true,
      })
        .then(image => {
          if (image?.assets) {
            convertToBase64(image?.assets[0]?.uri);
            // console.warn(image.assets[0].uri);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (c == 'c') {
      if (isCameraPermitted) {
        launchCamera({
          cropping: true,
          freeStyleCropEnabled: true,
          saveToPhotos: true,
        })
          .then(image => {
            if (image?.assets) {
              convertToBase64(image?.assets[0]?.uri);
              // console.warn(image?.assets[0]?.uri);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  const CamerOpt = () => {
    return (
      <View style={s.camerOpt}>
        {open ? (
          <View style={[s.camerbtn, s.imgBtn]}>
            <TouchableOpacity
              style={s.cameraBtnContainer}
              onPress={() => openCamera('c')}>
              <FontAwesome5 name={'camera'} size={20} color={'#FDBC2C'} solid />
              <Text style={[s.cameraBtnText, {color: '#fff'}]}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={s.cameraBtnContainer}
              onPress={() => openCamera('g')}>
              <FontAwesome5 name={'image'} size={20} color={'#FDBC2C'} solid />
              <Text style={[s.cameraBtnText, {color: '#fff'}]}>Gallery</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={s.imgBtn}>
            <Image source={Image1} style={s.img} />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return <CamerOpt />;
};

export default CameraOpt;

const s = StyleSheet.create({
  camerOpt: {
    backgroundColor: '#404040',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: moderateScale(5, 0.1),
    borderRadius: moderateScale(25, 0.1),
  },
  img: {
    width: '40%',
    height: '40%',
  },
  imgBtn: {
    backgroundColor: '#404040',
    width: moderateScale(140, 0.1),
    height: moderateScale(130, 0.1),
    borderRadius: moderateScale(25, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  camerbtn: {
    marginVertical: moderateScale(10, 0.1),
  },
  cameraBtnContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(10, 0.1),
  },
  cameraBtnText: {
    fontSize: moderateScale(14, 0.1),
    // fontFamily: MonteseratBold,
    marginLeft: moderateScale(10, 0.1),
  },
});
