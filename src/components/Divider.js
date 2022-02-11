import {View, StyleSheet} from 'react-native';
import React from 'react';

function Divider() {
  return <View style={styles.divider} />;
}
export default Divider;

export const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundcolor: '#DADADA',
  },
});
