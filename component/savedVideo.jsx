import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router'; // Import router

const saveVideo = async () => {
  if (!form.video) {
    return Alert.alert('No Video', 'Please upload a video first.');
  }
  
  try {
    await AsyncStorage.setItem('savedVideo', JSON.stringify(form.video)); // Save video
    Alert.alert('Success', 'Video saved successfully');
    router.push('/saved'); // Navigate to Saved screen
  } catch (error) {
    Alert.alert('Error', 'Failed to save the video.');
  }
};

<TouchableOpacity onPress={saveVideo}>
  <View className="pt-2">
    <Image
      source={icons.menu}
      resizeMode="contain"
      style={{ width: 20, height: 20 }}
    />
  </View>
</TouchableOpacity>

export default saveVideo