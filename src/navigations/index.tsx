import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Home = () => {
  return <Text>Home Screen</Text>;
};
const Profile = () => {
  return <Text>Profile Screen</Text>;
};

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
