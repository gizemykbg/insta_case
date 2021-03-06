import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import React from 'react';

const SearchImage = ({item}) => {
  return (
    <View style={styles.container}>
      {item.id === 1 ? (
        <FlatList
          data={item.url}
          keyExtractor={img => img.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={data => {
            return (
              <Image
                source={{
                  uri: data.item,
                }}
                resizeMode="cover"
                style={styles.image}
              />
            );
          }}
        />
      ) : (
        <Text>Error</Text>
      )}
    </View>
  );
};

export default SearchImage;

export const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    borderRadius: 30,
  },
  container: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    borderRadius: 30,
    margin: 3,
  },
});
