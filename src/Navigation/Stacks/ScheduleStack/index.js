import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../Screens/App/Home';

const Stack = createStackNavigator();

const ScheduleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
