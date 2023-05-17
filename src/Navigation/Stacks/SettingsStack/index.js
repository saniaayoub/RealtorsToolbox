import {createStackNavigator} from '@react-navigation/stack';
import PackageStatus from '../../../Screens/App/Settings/PackageStatus';
import UserSettings from '../../../Screens/App/Settings';
import EditProfile from '../../../Screens/App/Settings/EditProfile';
import Privacy from '../../../Screens/App/Settings/Privacy';
import Help from '../../../Screens/App/Settings/Help';
import ResetPassword from '../../../Screens/App/Settings/ResetPassword';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="PackageStatus" component={PackageStatus} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
