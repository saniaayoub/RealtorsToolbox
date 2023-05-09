import {createStackNavigator} from '@react-navigation/stack';
import BookoftheMonth from '../../../Screens/App/BOM';

const Stack = createStackNavigator();

const BOMStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookoftheMonth" component={BookoftheMonth} />
    </Stack.Navigator>
  );
};

export default BOMStack;
