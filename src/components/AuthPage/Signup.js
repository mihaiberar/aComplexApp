import React from 'react'
import Ellipse from '../AuthPage/Ellipse/Ellipse'
//import SignInForm from '../AuthPage/SignInForm/SignInForm'
import styles from './Auth.module.css'
//import Modal from '../Modal/Modal'
import SignUpForm from '../AuthPage/SignUpForm/SignUpForm'
function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.ellipse}>
        <Ellipse />
      </div>
      <div className={styles.signIn}>
        <SignUpForm />
      </div>
    </div>
  )
}
export default SignUp
