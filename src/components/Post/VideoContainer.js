import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
const VideoContainer = ({data}) => {
  return (
    <View>
      <Video source={{uri: data}} resizeMode="cover" style={styles.video} />
    </View>
  );
};

export default VideoContainer;

const witdh = Dimensions.get('window').width;
const ratio = 1080 / witdh;
const height = 960 / ratio;

const styles = StyleSheet.create({
  video: {
    width: witdh,
    height: height,
  },
});
