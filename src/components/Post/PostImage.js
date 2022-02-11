import {Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import React from 'react';
import VideoContainer from './VideoContainer';

const PostImage = ({item}) => {
  const renderItem = ({data}) => (
    <Image source={{uri: data}} style={styles.image} resizeMode="cover" />
  );

  return (
    <FlatList
      data={item.image}
      renderItem={renderItem}
      keyExtractor={post => post.id}
      showsVerticalScrollIndicator={false}
      horizontal
      style={styles.image}
    />
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

// const renderItem = ({data}) =>
// item.image ? (
//   <Image
//     source={{uri: data.images}}
//     style={styles.image}
//     resizeMode="cover"
//   />
// ) : (
//   <VideoContainer data={item.video} />
// );
