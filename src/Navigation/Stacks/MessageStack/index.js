import {createStackNavigator} from '@react-navigation/stack';

import Messages from '../../../Screens/App/Messages';
import Chat from '../../../Screens/App/Messages/Chat';

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default MessageStack;
