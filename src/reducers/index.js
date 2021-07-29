import { combineReducers } from 'redux'
import fetchTicketsReducer from './fetchTicketsReducer'
import { authReducer } from './authReducer'

const rootReducer = combineReducers({
  fetchedTickets: fetchTicketsReducer,
  auth: authReducer
})

export default rootReducer
