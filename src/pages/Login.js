import {View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(username, password);
  const setData = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem('Username', password);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Please write your username and password');
    }
  };

  console.log(AsyncStorage.setItem(username));
  const handleLogin = () => {
    setUsername(username);
    setPassword(password);
    setData();
  };

  return (
    <View>
      <LoginForm
        onPress={handleLogin}
        setPassword={setUsername}
        setUsername={setPassword}
      />
    </View>
  );
};
export default Login;
