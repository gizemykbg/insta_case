import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/nstagram.png')}
      />
      <View style={styles.icon_container}>
        <Icon name="plus-box-outline" color="black" size={25} />
        <Icon name="heart-outline" color="black" size={25} />
        <Icon name="message-processing-outline" color="black" size={25} />
      </View>
    </View>
  );
};

export default Header;
