import {createStackNavigator} from '@react-navigation/stack';
import InspireMe from '../../../Screens/App/InspireMe';

const Stack = createStackNavigator();

const InspireMeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="InspireMe" component={InspireMe} />
    </Stack.Navigator>
  );
};

export default InspireMeStack;
