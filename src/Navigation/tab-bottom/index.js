import React, {Component} from 'react';
import {NAV_TYPES} from '../navTypes';
import {TouchableOpacity} from 'react-native';

import HomeContainer from '../../Containers/HomeContainer';
import LoginContainer from '../../Containers/LoginContainer';
import DetailContainerr from '../../Containers/DetailContainerr';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          options={{title: 'Home'}}
          name={NAV_TYPES.HOME}
          component={HomeContainer}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={NAV_TYPES.DETAIL}
          component={DetailContainerr}
        />
        <Stack.Screen name={NAV_TYPES.LOGIN} component={LoginContainer} />
      </Stack.Navigator>
    );
  }
}
