import {Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import React from 'react';
import VideoContainer from './VideoContainer';

const PostImage = ({item}) => {
  return item.image ? (
    <FlatList
      data={item.image}
      renderItem={data => (
        <Image
          source={{uri: data.item}}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      keyExtractor={post => post.id}
      showsVerticalScrollIndicator={false}
      horizontal
      style={styles.image}
    />
  ) : (
    <VideoContainer data={item.video} />
  );
};

export default PostImage;

const witdh = Dimensions.get('window').width;
const ratio = 1080 / witdh;
const height = 607 / ratio;

export const styles = StyleSheet.create({
  image: {
    width: witdh,
    height: height,
  },
});

// const renderItem = ({data}) => (
//   <Image source={{uri: data}} style={styles.image} resizeMode="cover" />
// );
