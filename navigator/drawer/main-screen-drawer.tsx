import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainDrawerList} from '../../types/routes';
import HomeScreen from '../../screens/home-screen';
import ProfileScreen from '../../screens/profile-screen';

const MainDrawer = createDrawerNavigator<MainDrawerList>();

function MainScreenDrawer() {
  return (
    <MainDrawer.Navigator initialRouteName="Home">
      <MainDrawer.Screen name="Home" component={HomeScreen} />
      <MainDrawer.Screen name="Profile" component={ProfileScreen} />
    </MainDrawer.Navigator>
  );
}

export default MainScreenDrawer;
