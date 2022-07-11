import {connect} from 'react-redux';
import ScreenLogin from '../Screens/ScreenLogin';
import {user_login} from '../Modules/user/reducer';
const mapStateToProps = state => ({});
const mapDispatchToProps = {user_login};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);
