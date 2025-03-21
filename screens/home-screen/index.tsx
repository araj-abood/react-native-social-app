import MainFeed from '../../components/main-feed';
import {USER_POSTS} from '../../constants/dummy-data/user-posts';

function HomeScreen() {
  return <MainFeed posts={USER_POSTS} />;
}

export default HomeScreen;
