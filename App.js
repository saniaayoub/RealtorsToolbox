import 'react-native-gesture-handler';
import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Box} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyStatusBar from './src/Components/StatusBar';
import AuthStack from './src/Navigation/Stacks/AuthStack';
import BottomTabs from './src/Navigation/BottomTabs';
import RNBootSplash from 'react-native-bootsplash';
import {createStackNavigator} from '@react-navigation/stack';
import Loader from './src/Components/Loader';
import {AppContext, AppProvider, useAppContext} from './src/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const MainStack = createStackNavigator();

const AppContent = () => {
  const {token, setToken, setTheme} = useAppContext(AppContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      let token = await AsyncStorage.getItem('userToken');
      setToken(token);
      let theme = await AsyncStorage.getItem('theme');
      {
        theme ? setTheme(theme) : setLoader(false);
      }
    };
    const init = async () => {
      getToken();
    };
    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 1000});
      setLoader(false);
    });
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <MyStatusBar backgroundColor="#000" barStyle="light-content" />
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {loader && !token ? (
            <Loader backgroundColor={'#00205B'} />
          ) : (
            <NavigationContainer>
              <MainStack.Navigator screenOptions={{headerShown: false}}>
                {token ? (
                  <MainStack.Screen name="BottomTabs" component={BottomTabs} />
                ) : (
                  <MainStack.Screen name="AuthStack" component={AuthStack} />
                )}
              </MainStack.Navigator>
            </NavigationContainer>
          )}
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
