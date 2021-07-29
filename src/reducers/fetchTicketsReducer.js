import { FETCH_TICKETS, FILTER_TICKETS, UPDATE_TICKETS_LIST } from '../actions/types'

const initialState = {
  data: [],
  filteredData: []
}

const fetchTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload
      }
    case FILTER_TICKETS:
      return {
        ...state,
        filteredData: action.payload
      }
    case UPDATE_TICKETS_LIST:
      const source = [...state.data[action.sourceId]]
      const data = [...state.data]
      data[action.sourceId] = data[action.destinationId]
      data[action.destinationId] = source
      return {
        ...state,
        data: data
      }
    default:
      return state
  }
}

export default fetchTicketsReducer
