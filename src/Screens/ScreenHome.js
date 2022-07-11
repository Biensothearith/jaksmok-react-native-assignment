import React, {Component, createRef} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';
import NavigationService from '../Service/navigationService';
import {NAV_TYPES} from '../Navigation/navTypes';
export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      loading: false,

      page: 1,
      size: 9,

      data: [],
      end: false,
    };
    this.flatListRef = createRef(null);
  }

  componentDidMount() {
    this.props.getBooks({page: this.state.page, size: this.state.size});
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    var {home} = this.props;
    if (nextProps.home.books && nextProps.home.books !== home.books) {
      this.setState({loading: false});
      if (nextProps.home.books.message === 'success') {
        if (
          nextProps.home.books.results.content.length === 0 ||
          nextProps.home.books.results.content.length < this.state.size
        ) {
          this.setState({end: true});
        } else {
          this.setState({end: false});
        }

        if (nextProps.home.books.results.content.length > 0) {
          this.setState({
            data: [...this.state.data, ...nextProps.home.books.results.content],
          });
        }
        this.setState({loading: false});
      }
    }
    if (
      nextProps.home.booksError &&
      nextProps.home.booksError !== home.booksError
    ) {
      this.setState({end: true});
    }
  }
  onEndReached = () => {
    var {page, end} = this.state;
    if (!end) {
      this.props.getBooks({page: this.state.page, size: this.state.size});
      this.setState({
        page: page + 1,
        loading: true,
      });
    }
  };
  ListFooterComponent = () => {
    const {loading, end} = this.state;
    return <View></View>;
  };

  renderItem(data) {
    var data = data.item;
    return (
      <TouchableOpacity
        onPress={() =>
          NavigationService.navigate(NAV_TYPES.DETAIL, {id: data.id})
        }
        style={styles.onetab}>
        <View>
          <Text style={styles.textTitle}>{data.title}</Text>
          <Text style={styles.textPrice}>$ {data.pages}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <SafeAreaView
        style={styles.main_safeAreaview}
        onTouchStart={() => {
          this.setState({showFavorite: false});
        }}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          ListFooterComponent={this.ListFooterComponent}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  onetab: {
    height: 72,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  textPrice: {
    fontSize: 14,
    fontWeight: '500',
  },
});
