import {connect} from 'react-redux';
import ScreenHome from '../Screens/ScreenHome';
import {getBooks} from '../Modules/home/reducer';
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = {
  getBooks,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenHome);
