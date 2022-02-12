import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './TabNavigation';

import {useState} from 'react';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getData = async () => {
    try {
      await AsyncStorage.getItem('Username').then(value => {
        if (value !== null) {
          console.log(value);
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [isLogin]);

  console.log(isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin === true ? (
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
