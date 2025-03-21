import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/home-screen';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar animated barStyle={'dark-content'} />
        <HomeScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
