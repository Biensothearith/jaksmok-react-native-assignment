import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NAV_TYPES} from '../navTypes';

import StartUp from '../../Containers/StartUpContainer';
import CORE from '../core';
import Intro from '../intro';

const MainNavigator = createStackNavigator();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainNavigator.Navigator
        initialRouteName={NAV_TYPES.START_UP}
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen name={NAV_TYPES.START_UP} component={StartUp} />
        <MainNavigator.Screen name={NAV_TYPES.INTRO} component={Intro} />
        <MainNavigator.Screen name={NAV_TYPES.CORE} component={CORE} />
      </MainNavigator.Navigator>
    );
  }
}
