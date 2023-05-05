import {createStackNavigator} from '@react-navigation/stack';

import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import StartScreen from '../../../Screens/Auth/Start';
import Login from '../../../Screens/Auth/Login';
import Register from '../../../Screens/Auth/Register';
import ForgetPass from '../../../Screens/Auth/ForgetPass';
const Stack = createStackNavigator();

const AuthStack = () => {
  const exist = useSelector(state => state.reducer.exist);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!exist ? (
        <Stack.Screen name="StartScreen" component={StartScreen} />
      ) : null}

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      {/* <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Map1" component={Map1} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
