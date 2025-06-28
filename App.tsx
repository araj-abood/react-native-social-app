import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigator/stack/main-stack';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar animated barStyle={'dark-content'} />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
