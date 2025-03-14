import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from './components/home-header';
import commonStyles from './common/common-styles';
import StoriesSection from './components/stories-section';
import {userStories} from './constants/dummy-data/user-stories';
import MainFeed from './components/main-feed';
import {USER_POSTS} from './constants/dummy-data/user-posts';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[commonStyles.marginLeftLarge, commonStyles.marginRightMediuem]}>
        <HomeHeader />
      </View>
      <StoriesSection data={userStories} />
      <MainFeed posts={USER_POSTS} />
    </SafeAreaView>
  );
}

export default App;
