import {View} from 'react-native';
import HomeHeader from '../../home-header';
import StoriesSection from '../../stories-section';
import {userStories} from '../../../constants/dummy-data/user-stories';
import commonStyles from '../../../common/common-styles';

function MainFeedTop() {
  return (
    <>
      <View style={commonStyles.marginXMedium}>
        <HomeHeader />
      </View>
      <StoriesSection data={userStories} />
    </>
  );
}

export default MainFeedTop;
