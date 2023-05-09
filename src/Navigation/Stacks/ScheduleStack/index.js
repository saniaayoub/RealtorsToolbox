import {createStackNavigator} from '@react-navigation/stack';
import Schedule from '../../../Screens/App/Schedule';

const Stack = createStackNavigator();

const ScheduleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
