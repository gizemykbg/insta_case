import {View, StyleSheet} from 'react-native';
import React from 'react';
import SearchBox from '../components/SearchBox';
import {SearchContent} from '../components/SearchContent';

const Search = () => {
  return (
    <View style={styles.container}>
      <View>
        <SearchBox />
        {/* <SearchContent /> */}
      </View>
    </View>
  );
};

export default Search;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
});
