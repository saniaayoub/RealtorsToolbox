import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Check from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import {AppContext, useAppContext} from '../Context/AppContext';
import {backDark, backLight, textDark, textLight} from '../Constants';

const MonteseratBold = 'Montserrat-Bold';
const MonteseratRegular = 'Montserrat-Regular';
const MonteseratLight = 'Montserrat-Light';

const PackageCard = props => {
  const {theme} = useAppContext(AppContext);
  const textColor = theme === 'dark' ? textLight : textDark;
  const backColor = theme === 'dark' ? backDark : backLight;

  return (
    <TouchableOpacity
      style={[s.container, {backgroundColor: textColor}]}
      onPress={() => {
        console.log(props.item.title);
      }}>
      <Image source={props.item.image} resizeMode="cover" style={s.image} />
      <View style={{marginBottom: moderateScale(20, 0.1)}}>
        <Text style={[s.headingText1, {color: textColor}]}>
          {props.item.title}
        </Text>
        <Text style={[s.headingText2, {color: textColor}]}>
          {props.item.rate}
        </Text>
      </View>

      {[1, 2, 3, 4].map((elem, index) => {
        return (
          <View key={index} style={s.row}>
            <View style={s.icon}>
              <Check
                name={'check'}
                size={moderateScale(5, 0.1)}
                color={backColor}
              />
            </View>

            <Text style={[s.smallText, {color: backColor}]}>
              Lorem Ipsum is simply dummy text of the printing
            </Text>
          </View>
        );
      })}
      <TouchableOpacity
        onPressIn={async () => {}}
        style={[s.btn, {borderColor: backColor}]}>
        <View>
          <Text style={[s.smallText, {color: backColor}]}>Choose Plan</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PackageCard;

const s = StyleSheet.create({
  container: {
    width: '32.5%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: moderateScale(10, 0.1),

    borderRadius: moderateScale(15, 0.1),
  },
  image: {
    width: '100%',
    height: '45%',
    position: 'absolute',
    borderTopLeftRadius: moderateScale(15, 0.1),
    borderTopRightRadius: moderateScale(15, 0.1),
  },
  row: {
    paddingHorizontal: moderateScale(5, 0.1),
    marginHorizontal: moderateScale(5, 0.1),
    marginVertical: moderateScale(3, 0.1),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icon: {
    marginTop: moderateScale(1, 0.1),
    marginRight: moderateScale(5, 0.1),
  },
  headingText1: {
    textAlign: 'center',
    fontSize: moderateScale(14, 0.1),
    fontFamily: MonteseratRegular,
  },
  headingText2: {
    marginLeft: moderateScale(5, 0.1),
    marginVertical: moderateScale(5, 0.1),
    fontSize: moderateScale(14, 0.1),
    fontFamily: MonteseratBold,
  },
  smallText: {
    fontSize: moderateScale(5, 0.1),
    fontFamily: MonteseratLight,
  },
  btn: {
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(10, 0.1),
    height: moderateScale(20, 0.1),
    justifyContent: 'center',
    borderWidth: moderateScale(1, 0.1),
    backgroundColor: 'transparent',
    borderRadius: moderateScale(50, 0.1),
  },
  btnText: {
    fontSize: moderateScale(10, 0.1),
    lineHeight: moderateScale(15, 0.1),
    fontFamily: MonteseratBold,
  },
});
