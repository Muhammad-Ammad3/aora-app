import { Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from 'expo-av';

const Saved = () => {
  const [savedVideos, setSavedVideos] = useState([]);

  useEffect(() => {
    const fetchSavedVideos = async () => {
      try {
        const videos = await AsyncStorage.getItem('savedVideos');
        if (videos) {
          setSavedVideos(JSON.parse(videos));
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchSavedVideos();
  }, []);

  return (
    <ScrollView className="px-4 my-5">
      <Text className="text-black text-3xl mb-4 text-center">Saved Videos</Text>
      {savedVideos.length > 0 ? (
        savedVideos.map((video, index) => (
          <View key={index} className="mb-4 items-center">
            <Video
              source={{ uri: video.uri }}
              style={{ width: 300, height: 200 }}
              useNativeControls
              resizeMode="contain"
            />
          </View>
        ))
      ) : (
        <Text className="text-gray-500 text-center">No saved videos found</Text>
      )}
    </ScrollView>
  );
};
export default Saved;