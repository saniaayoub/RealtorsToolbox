import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../Screens/App/Home';
import MyWhy from '../../../Screens/App/Home/MyWhy';
import Monthly from '../../../Screens/App/Home/Monthly';
import Yearly from '../../../Screens/App/Home/Yearly';
import Notifications from '../../../Screens/App/Notifications';
import FAQs from '../../../Screens/App/FAQs';
import UserSettings from '../../../Screens/App/Settings';
import EditProfile from '../../../Screens/App/Settings/EditProfile';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyWhy" component={MyWhy} />
      <Stack.Screen name="Monthly" component={Monthly} />
      <Stack.Screen name="Yearly" component={Yearly} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
