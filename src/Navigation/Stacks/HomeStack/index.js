import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../Screens/App/Home';
import MyWhy from '../../../Screens/App/Home/MyWhy';
import Monthly from '../../../Screens/App/Home/Monthly';
import Yearly from '../../../Screens/App/Home/Yearly';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyWhy" component={MyWhy} />
      <Stack.Screen name="Monthly" component={Monthly} />
      <Stack.Screen name="Yearly" component={Yearly} />
    </Stack.Navigator>
  );
};

export default HomeStack;
