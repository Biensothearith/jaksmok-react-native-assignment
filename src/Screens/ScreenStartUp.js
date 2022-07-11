import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationService from '../Service/navigationService';
import {NAV_TYPES} from '../Navigation/navTypes';

export default class StartUp extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  componentDidMount() {
   
    this.props.startupWorker();
  }
  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
