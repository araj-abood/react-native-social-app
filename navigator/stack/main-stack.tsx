import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamsList} from '../../types/routes';
import MainScreenDrawer from '../drawer/main-screen-drawer';
import ProfileScreen from '../../screens/profile-screen';

const MainStackNavigator = createStackNavigator<RootStackParamsList>();

function MainStack() {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="MainScreen"
      screenOptions={{headerShown: false}}>
      <MainStackNavigator.Screen
        name="MainScreen"
        component={MainScreenDrawer}
      />
      <MainStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </MainStackNavigator.Navigator>
  );
}

export default MainStack;
