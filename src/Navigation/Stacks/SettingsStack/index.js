import {createStackNavigator} from '@react-navigation/stack';
import PackageStatus from '../../../Screens/App/Settings/PackageStatus';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PackageStatus" component={PackageStatus} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
