import 'react-native-gesture-handler';
import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Box} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyStatusBar from './src/Components/StatusBar';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme, setUserToken, setExist} from './src/Redux/actions';
import {TextInput} from 'react-native-gesture-handler';
import AuthStack from './src/Navigation/Stacks/AuthStack';
import BottomTabs from './src/Navigation/BottomTabs';

const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.reducer.userToken);
  const theme = useSelector(state => state.reducer.theme);

  useEffect(() => {
    // const init = async () => {
    //   // …do multiple sync or async task
    //   getToken();
    // };
    // init().finally(async () => {
    //   if (Platform.OS == 'ios') {
    //     await RNBootSplash.hide({fade: true, duration: 500});
    //   }
    //   console.log('Bootsplash has been hidden successfully');
    // });
  }, []);

  const getToken = async () => {
    let token = await AsyncStorage.getItem('userToken');
    let exist = await AsyncStorage.getItem('already');
    console.log('app');
    dispatch(setExist(exist));
    dispatch(setUserToken(token));
  };

  const setThemeMode = async token => {};

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <MyStatusBar backgroundColor="#000" barStyle="light-content" />
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <NavigationContainer>
            {userToken === null || userToken === '' ? (
              <AuthStack />
            ) : (
              <BottomTabs />
            )}
          </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
