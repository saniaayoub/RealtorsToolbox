import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Cross from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const MonteseratBold = 'Montserrat-Bold';
const MonteseratLight = 'Montserrat-Light';

const EventModal = ({modalVisible, setModalVisible}) => {
  const theme = useSelector(state => state.reducer.theme);
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';
  const backColor = theme === 'dark' ? '#232323' : '#fff';
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
            <Button
              size="sm"
              onPressIn={async () => {
                setSubmit(false);
                setModalVisible(!modalVisible);
              }}
              variant={'solid'}
              style={s.cancel}>
              <Cross
                name="x"
                size={moderateScale(20, 0.1)}
                color={textColor}
                solid
              />
            </Button>
            {!submit ? (
              <>
                <Text style={[s.headingText, {color: textColor}]}>
                  Send Invite to this Client?
                </Text>
                <View style={s.btns}>
                  <Button
                    size="sm"
                    onPressIn={async () => {
                      setSubmit(true);
                    }}
                    variant={'solid'}
                    style={s.btn}>
                    <View style={s.btnView}>
                      <Text style={[s.btnText, {color: textColor}]}>Yes</Text>
                    </View>
                  </Button>
                  <Button
                    size="sm"
                    onPressIn={async () => {
                      setSubmit(false);
                      setModalVisible(!modalVisible);
                    }}
                    variant={'solid'}
                    style={[s.btn, s.btn1]}>
                    <View style={s.btnView}>
                      <Text style={[s.btnText, {color: textColor}]}>No</Text>
                    </View>
                  </Button>
                </View>
              </>
            ) : (
              <>
                <Text style={[s.headingText, {color: textColor}]}>
                  Your Appointment has been Shared
                </Text>
                <Text style={[s.headingText1, {color: textColor}]}>
                  THANK YOU!
                </Text>
              </>
            )}
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default EventModal;

const s = StyleSheet.create({
  cancel: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: moderateScale(10, 0.1),
    top: moderateScale(10, 0.1),
  },
  item: {
    width: '85%',
    height: '40%',
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
    textAlign: 'center',
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(25, 0.1),
    fontFamily: MonteseratLight,
  },

  headingText1: {
    paddingTop: moderateScale(10, 0.1),
    width: '50%',
    textAlign: 'center',
    fontSize: moderateScale(30, 0.1),
    // lineHeight: moderateScale(30, 0.1),
    fontFamily: MonteseratBold,
  },
  btn: {
    marginTop: moderateScale(40, 0.1),
    backgroundColor: '#FDBC2C',
    borderRadius: moderateScale(50, 0.1),
    width: moderateScale(120, 0.1),
    height: moderateScale(35, 0.1),
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FDBC2C',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  btnText: {
    fontSize: moderateScale(16, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontFamily: MonteseratBold,
    color: '#fff',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
