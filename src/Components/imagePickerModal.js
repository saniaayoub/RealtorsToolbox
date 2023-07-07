import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import CameraOpt from './CameraOpt';
import {AppContext, useAppContext} from '../Context/AppContext';
import {backDark, backLight, textDark, textLight} from '../Constants';

const MonteseratBold = 'Montserrat-Bold';
const MonteseratLight = 'Montserrat-Light';

const ImagePicker = ({modalVisible, setModalVisible, screen, setFilePath}) => {
  const {theme} = useAppContext(AppContext);

  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;
  const [submit, setSubmit] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[s.centeredView]}>
        <LinearGradient
          colors={['#000000', '#FFFFFF', 'grey']}
          start={{x: 0.0, y: 0.4, z: 0.6}}
          end={{x: 1.0, y: 1.0, z: 1.0}}
          style={[s.item]}>
          <View style={[s.gradientView, {backgroundColor: backColor}]}>
            <Text style={[s.headingText, {color: textColor}]}>{screen}</Text>

            <CameraOpt
              setFilePath={setFilePath}
              setModalVisible={setModalVisible}
            />
            <Button
              size="sm"
              onPressIn={async () => {
                setModalVisible(!modalVisible);
              }}
              variant={'solid'}
              style={s.btn}>
              <Text style={s.btnText}>Cancel</Text>
            </Button>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default ImagePicker;

const s = StyleSheet.create({
  item: {
    width: '80%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: moderateScale(25, 0.1),
  },
  gradientView: {
    height: '99%',
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(25, 0.1),
  },
  headingText: {
    width: '65%',
    marginBottom: moderateScale(25, 0.1),
    textAlign: 'center',
    fontSize: moderateScale(18, 0.1),
    lineHeight: moderateScale(30, 0.1),
    fontFamily: MonteseratBold,
  },

  btn: {
    backgroundColor: 'transparent',
    marginTop: moderateScale(25, 0.1),
  },

  btnText: {
    fontSize: moderateScale(18, 0.1),
    lineHeight: moderateScale(24, 0.1),
    fontFamily: MonteseratBold,
    color: '#FDBC2C',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
