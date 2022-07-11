import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAV_TYPES} from '../navTypes';
import screenLogin from '../../Containers/LoginContainer';

const IntroNavigation = createStackNavigator();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IntroNavigation.Navigator
        initialRouteName={NAV_TYPES.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        <IntroNavigation.Screen
          name={NAV_TYPES.LOGIN}
          component={screenLogin}
        />
      </IntroNavigation.Navigator>
    );
  }
}
