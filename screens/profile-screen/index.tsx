import {Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.contaier}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicBorder}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={styles.profilePic}
            />
          </View>
        </View>
        <Text style={styles.profileName}>Abdullah Al-araj</Text>
        <View style={styles.statsContainer}>
          <View>
            <Text style={styles.statsNumber}>42</Text>
            <Text style={styles.statsLabel}>Following</Text>
          </View>
          <View style={styles.statsBorder} />
          <View>
            <Text style={styles.statsNumber}>20M</Text>
            <Text style={styles.statsLabel}>Followers</Text>
          </View>
          <View style={styles.statsBorder} />

          <View>
            <Text style={styles.statsNumber}>100</Text>
            <Text style={styles.statsLabel}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default ProfileScreen;
