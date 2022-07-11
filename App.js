import React, {Component, useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import store from './src/Store/index';
import Navigation from './src/Navigation/index';
import {Provider} from 'react-redux';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      network: false,
    };
  }

  async componentDidMount() {
    this.checknetwork;
  }

  componentWillUnmount() {
    this.checknetwork;
  }
  checknetwork() {
    NetInfo.addEventListener(networkState => {
      var network =
        networkState.type === 'wifi' ||
        networkState.type === 'cellular' ||
        !networkState.isConnected
          ? true
          : false;
      this.setState({
        network,
      });
      console.log(network);
    });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Navigation />
          <Modal visible={this.state.network}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>No Internet</Text>
            </View>
          </Modal>
        </View>
      </Provider>
    );
  }
}
// const App = () => {
//   const [netInfo, setNetInfo] = useState(false);
//   useEffect(() => {
//     // Subscribe to network state updates
//     const unsubscribe = NetInfo.addEventListener(state => {
//       if (
//         (state.type === 'wifi' || state.type === 'cellular') &&
//         !state.isConnected
//       ) {
//         setNetInfo(true);
//       }
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   return (
//     <Provider store={store}>
//       <View style={{flex: 1}}>
//         {console.log(netInfo)}
//         <Navigation />
//         <Modal visible={netInfo}>
//           <View
//             style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text>No Internet</Text>
//           </View>
//         </Modal>
//       </View>
//     </Provider>
//   );
// };

export default App;
