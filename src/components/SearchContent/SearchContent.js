import {FlatList, Text, Video} from 'react-native';
import React, {useRef} from 'react';
import imgUrl from '../../utills/imgUrl.json';
import SearchImage, {styles} from './SearchImage';

const SearchContent = () => {
  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };
  const renderItem = ({item}) => {
    return item.id === 1 ? (
      <SearchImage item={item} />
    ) : (
      <Video
        source={{uri: item.url}}
        resizeMode="cover"
        style={styles.image}
        onBuffer={onBuffer}
        onError={onError}
      />
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
