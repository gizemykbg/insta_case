import {View, Image, TextInput, Button} from 'react-native';
import React from 'react';
import {styles} from './LoginForm.styles';

const LoginForm = ({
  onPress,
  onChangeName,
  onChangePass,
  setUsername,
  setPassword,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Image
          style={styles.img}
          source={{uri: '../../assets/images-884730.png'}}
        />
        <Image source={{uri: '../../assets/IG logo.svg'}} style={styles.logo} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          textContentType="username"
          onChangeText={value => {
            setUsername(value);
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          textContentType="password"
          onChangeText={value => {
            setPassword(value);
          }}
        />
      </View>
      <Button style={styles.button} onPress={onPress} title="Login" />
    </View>
  );
};

export default LoginForm;
