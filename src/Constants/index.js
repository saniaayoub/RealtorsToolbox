import React from 'react';
import {Dimensions} from 'react-native';
import RNFS from 'react-native-fs';
import {postApi} from '../APIs';

//constants
export const theme = 'dark';
export const dummyImage =
  'https://designprosusa.com/the_night/storage/app/1678168286base64_image.png';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
);

//theme colors
export const backDark = '#232323';
export const backLight = '#fff';
export const textDark = '#3F3E3E';
export const textLight = '#fff';

//functions
export const validateEmail = (e, setE) => {
  if (emailReg.test(e)) {
    console.log('true');
    setE(true);
  } else {
    setE(false);
  }
};

export const convertToBase64 = async (image, setFilePath, screen) => {
  await RNFS.readFile(image, 'base64')
    .then(res => {
      let base64 = `data:image/png;base64,${res}`;
      getImgUrl(base64, setFilePath);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getImgUrl = async base64 => {
  let data = {
    image: base64,
  };
  const res = await postApi('image-upload-64', data, token);
  const dp = res?.data?.image_url;
  // console.log(dp);
  if (dp) {
    setFilePath(dp);
  } else {
    Alert.alert(res?.data?.message);
  }
  setLoader(false);
};
