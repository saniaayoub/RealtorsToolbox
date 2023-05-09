import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../Screens/App/Home';
import MyWhy from '../../../Screens/App/Home/MyWhy';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyWhy" component={MyWhy} />
    </Stack.Navigator>
  );
};

export default HomeStack;
