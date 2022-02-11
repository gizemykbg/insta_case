import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

const SearchImage = ({item}) => {
  const renderItem = ({data}) => (
    <Image source={{uri: data.url}} resizeMode="cover" style={styles.image} />
  );

  return (
    // <View >
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {item.map((img, index) => (
        <View key={index} style={styles.inner_container}>
          <Image source={{uri: img.images}} style={styles.image} />
        </View>
      ))}
    </ScrollView>
    //   <FlatList
    //  data={item}
    //  keyExtractor={(_, index) => index.toString()}
    // horizontal
    // showsHorizontalScrollIndicator={false}
    // pagingEnabled
    // renderItem={renderItem}
    // />
    // </View>
  );
};

export default SearchImage;

export const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
  },
  container: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    borderRadius: 30,
    margin: 3,
    backgroundColor: 'red',
  },
});
