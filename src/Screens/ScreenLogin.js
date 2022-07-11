import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import NavigationService from '../Service/navigationService';
import {NAV_TYPES} from '../Navigation/navTypes';
import {icons} from '../Assets';
export default class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      username: 'sampleId',
      password: 'Secret',
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}
  handleLogin() {
    var {username, password} = this.state;
    if (username === '' || password === '') {
      Alert.alert('Wrong data!');
    } else this.props.user_login({username, password});
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.main_view}>
          <View style={styles.view_header}></View>
          <View style={styles.view_body}>
            <View style={styles.view_body_main}>
              <TextInput
                value={this.state.username}
                onChangeText={text => this.setState({username: text})}
                style={styles.text_input_username}
                placeholder="Username"></TextInput>
              <TextInput
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
                secureTextEntry={true}
                style={[styles.text_input_username, styles.text_input_password]}
                placeholder="Password"></TextInput>
              <TouchableOpacity
                onPress={() => this.handleLogin()}
                style={styles.btn_login}>
                <Text style={styles.btn_login_text}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.view_top_foolter}></View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main_view: {
    flex: 1,
  },
  view_header: {
    flex: 0.1,
  },
  view_body: {
    flex: 0.8,
  },
  view_body_main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  view_foolter: {
    flex: 0.1,
  },
  text_input_username: {
    paddingHorizontal: 5,
    width: '90%',
    height: 43,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  text_input_password: {
    marginVertical: 10,
  },
  btn_login: {
    width: '60%',
    backgroundColor: 'gray',
    height: 43,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 5,
  },
  btn_login_text: {
    color: '#FFF',
    textAlign: 'center',
  },
});
