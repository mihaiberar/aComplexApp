import React from 'react'
import Ellipse from '../AuthPage/Ellipse/Ellipse'
import styles from './Auth.module.css'
import SignInFormContainer from './SignInForm/SignInFormContainer'
//import Modal from '../Modal/Modal'
import store from '../../store/store'
import { Provider } from 'react-redux'
function SignIn() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.ellipse}>
          <Ellipse />
        </div>
        <div className={styles.signIn}>
          <SignInFormContainer />
        </div>
      </div>
    </Provider>
  )
}
export default SignIn
