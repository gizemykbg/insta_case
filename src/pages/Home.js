import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {Posts} from '../utills/posts';
import {PostCard} from '../components/Post';
import Stories from '../components/Header/Stories';
import Divider from '../components/Divider';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        <Stories item={Posts} />
        <Divider />
        {Posts.map(item => (
          <View key={item.id}>
            <PostCard item={item} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};
export default Home;

export const styles = StyleSheet.create({
  container: {},
});
//  <FlatList
//           data={Posts}
//           renderItem={renderItem}
//           keyExtractor={Posts.id}
//         />
