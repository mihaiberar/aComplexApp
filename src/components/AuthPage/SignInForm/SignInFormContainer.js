import { connect } from 'react-redux'
import { loginSuccess } from '../../../actions/authActions'
import SignInForm from './SignInForm'

const mapStateToProps = (state) => ({
  uid: state.auth.uid,
  loggedIn: state.auth.loggedIn
})
const mapDispatchToProps = {
  loginSuccess
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
