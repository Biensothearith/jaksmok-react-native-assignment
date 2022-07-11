import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NAV_TYPES} from '../navTypes';
import TabBottom from '../tab-bottom';
import HomeContainer from '../../Containers/HomeContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const CoreNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CoreNavigator.Navigator
        initialRouteName={NAV_TYPES.TAB_BUTTOM}
        screenOptions={{
          headerShown: false,
        }}>
        <CoreNavigator.Screen
          name={NAV_TYPES.TAB_BUTTOM}
          component={TabBottom}
        />
        <CoreNavigator.Screen name={NAV_TYPES.HOME} component={HomeContainer} />
      </CoreNavigator.Navigator>
    );
  }
}
