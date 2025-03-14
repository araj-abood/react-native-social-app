import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from './components/home-header';
import commonStyles from './common/common-styles';
import StoriesSection from './components/stories-section';
import {userStories} from './constants/dummy-data/user-stories';

function App() {
  
  return (
    <SafeAreaView>
      <View
        style={[commonStyles.marginLeftLarge, commonStyles.marginRightMediuem]}>
        <HomeHeader />
      </View>
      <StoriesSection data={userStories} />
    </SafeAreaView>
  );
}

export default App;
