import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from './components/home-header';
import commonStyles from './common/common-styles';

function App() {
  return (
    <SafeAreaView>
      <View
        style={[commonStyles.marginLeftLarge, commonStyles.marginRightMediuem]}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
}

export default App;
