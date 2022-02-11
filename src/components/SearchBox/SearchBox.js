import {View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './SearchBox.styles';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Icon name="select-search" color="#909090" size={18} />
      <TextInput
        placeholder="search"
        placeholderTextColor="#909090"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBox;
