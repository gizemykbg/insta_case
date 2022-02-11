import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const Stories = ({item}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.map((user, index) => (
          <View key={index} style={styles.inner_container}>
            <Image source={{uri: user.user.avatar}} style={styles.story} />
            <Text style={styles.username}>
              {user.user.name.length > 11
                ? user.user.slice(0, 10).toLowerCase() + '...'
                : user.user.name.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 4,
    borderColor: '#ff8501',
  },
  inner_container: {
    alignItems: 'center',
  },
});
