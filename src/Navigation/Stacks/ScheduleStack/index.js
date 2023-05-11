import {createStackNavigator} from '@react-navigation/stack';
import Schedule from '../../../Screens/App/Schedule';
import AddAppointment from '../../../Screens/App/Schedule/AddAppointment';
const Stack = createStackNavigator();

const ScheduleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="AddAppointment" component={AddAppointment} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
