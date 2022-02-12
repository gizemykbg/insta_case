import {FlatList} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import imgUrl from '../../utills/imgUrl.json';
import SearchImage, {styles} from './SearchImage';

const SearchContent = () => {
  const renderItem = ({item}) => {
    // console.log(item);
    return item.id === 1 ? (
      <SearchImage item={item} />
    ) : (
      <Video source={{uri: item.url}} resizeMode="cover" style={styles.image} />
    );
  };

  return (
    <FlatList
      data={imgUrl}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      windowSize={1}
    />
  );
};

export default SearchContent;
