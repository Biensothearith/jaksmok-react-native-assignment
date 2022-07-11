import {connect} from 'react-redux';
import ScreenDetail from '../Screens/ScreenDetail';
import {getBook} from '../Modules/home/reducer';
const mapStateToProps = state => ({
  ...state,
});
const mapDispatchToProps = {
  getBook,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenDetail);
