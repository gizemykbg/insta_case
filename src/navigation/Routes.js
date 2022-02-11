import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';

import {useState} from 'react';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getData = async () => {
    try {
      await AsyncStorage.getItem('Username').then(value => {
        if (value !== null) {
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
  console.log(AsyncStorage.getItem('Username'));
  console.log(isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        {isLogin === true ? (
          <Stack.Screen
            name="Tabs"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name="loginStack" component={StackNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
