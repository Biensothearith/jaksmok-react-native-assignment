import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './main';
import NavigationService from '../Service/navigationService';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }>
        <Main />
      </NavigationContainer>
    );
  }
}
