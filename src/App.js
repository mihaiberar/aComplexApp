/* eslint-disable no-unused-vars */
import React from 'react'
import SignIn from './components/AuthPage/Signin'
import SignUp from './components/AuthPage/Signup'
import { Tickets } from './components/Tickets/tickets'
import Overview from './components/OverView/Overview'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//import PrivateRoute from './components/PrivateRoutes/PrivateRoute'
import PrivateRouteContainer from './components/PrivateRoutes/PrivateRouteContainer'
import store from './store/store'
import { Provider } from 'react-redux'
import PrivateRoute from './components/PrivateRoutes/PrivateRoute'
import NotLoggedIn from './components/PrivateRoutes/NotLoggedIn'
import NotLoggedInContainer from './components/PrivateRoutes/NotLoggedInContainer'
function App() {
  /*
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const updateemail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitUser = () => {
    // eslint-disable-next-line no-console
    console.log(getAllByCollection('users'))
  }
*/
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRouteContainer path="/tickets" component={<Tickets />}></PrivateRouteContainer>
          <NotLoggedInContainer path="/signup" component={<SignUp />}></NotLoggedInContainer>
          <NotLoggedInContainer path="/login" component={<SignIn />}></NotLoggedInContainer>
          <PrivateRouteContainer exact path="/" component={<Overview />}></PrivateRouteContainer>
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
