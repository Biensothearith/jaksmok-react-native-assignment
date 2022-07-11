import React, {Component, createRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import NavigationService from '../Service/navigationService';
import {icons} from '../Assets';
const win = Dimensions.get('window');
export default class Detail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      loading: false,
      data: false,
    };
  }

  componentDidMount() {
    const id = this.props.route.params.id;
    if (id) {
      this.props.getBook(id);
    } else {
      NavigationService.goBack();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    var {home} = this.props;
    if (nextProps.home.book && nextProps.home.book !== home.book) {
      if (nextProps.home.book.message === 'success') {
        this.setState({
          data: nextProps.home.book.results,
        });
      }
    }
  }
  render() {
    var {data, loading} = this.state;
    return (
      <SafeAreaView>
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
        <View style={styles.main_view}>
          <View>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={styles.button_back}>
              <Image source={icons.back} style={styles.icon_back} />
            </TouchableOpacity>
            <Image
              onLoadStart={() => this.setState({loading: true})}
              onLoadEnd={() => this.setState({loading: false})}
              source={{uri: `${data.imageUrl}`}}
              style={styles.image}
            />
          </View>
          <ScrollView>
            <View style={{flexDirection: 'row', paddingVertical: 20}}>
              <View style={{flex: 0.7, flexDirection: 'column'}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {data.title}
                </Text>
                <Text style={{fontSize: 14, marginVertical: 10}}>
                  {data.author}
                </Text>
              </View>
              <View style={styles.view_text_price}>
                <Text>$ {data.pages}</Text>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 14}}>
                The novel's protagonist, Okonkwo, is famous in the villages of
                Umuofia for being a wrestling champion, defeating a wrestler
                nicknamed "Amalinze The Cat" (because he never lands on his
                back). Okonkwo is strong, hard-working, and strives to show no
                weakness. He wants to dispel his father Unoka's tainted legacy
                of unpaid debts, a neglected wife and children, and cowardice at
                the sight of blood. Okonkwo works to build his wealth entirely
                on his own, as Unoka died a shameful death and left many unpaid
                debts. The novel's protagonist, Okonkwo, is famous in the
                villages of Umuofia for being a wrestling champion, defeating a
                wrestler nicknamed "Amalinze The Cat"
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main_view: {
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: win.height / 3,
    resizeMode: 'contain',
  },
  icon_back: {
    width: 10,
    height: 20,
  },
  button_back: {
    width: 80,
    zIndex: 1,
    marginVertical: 10,
    paddingVertical: 5,
    marginBottom: -30,
  },
  view_text_price: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
