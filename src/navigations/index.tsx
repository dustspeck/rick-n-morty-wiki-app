import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/Home';
import Profile from '../components/Profile';
import {ICharacter} from '../types';

export type RootStackParamList = {
  Profile: {data: ICharacter};
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainStack;
