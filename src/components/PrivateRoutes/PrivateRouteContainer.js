import { connect } from 'react-redux'
import { loginSuccess } from '../../actions/authActions'
import PrivateRoute from './PrivateRoute'

const mapStateToProps = (state) => ({
  uid: state.auth.uid,
  loggedIn: state.auth.loggedIn
})
const mapDispatchToProps = {
  loginSuccess
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
