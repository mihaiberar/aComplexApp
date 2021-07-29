import { FETCH_TICKETS, FILTER_TICKETS, UPDATE_TICKETS_LIST } from './types'
import { getAllByCollection } from '../firebase/api'

export const fetchTickets = () => {
  return async (dispatch) => {
    const apiTickets = await getAllByCollection('tickets')
    dispatch(setTickets(apiTickets))
  }
}

export function setTickets(tickets) {
  return {
    type: FETCH_TICKETS,
    payload: tickets
  }
}

export function updateTickets(sourceId, destinationId) {
  // eslint-disable-next-line no-console
  console.log('update', sourceId, destinationId)
  return {
    type: UPDATE_TICKETS_LIST,
    sourceId: sourceId,
    destinationId: destinationId
  }
}

export function filterTickets(filteredList) {
  return {
    type: FILTER_TICKETS,
    payload: filteredList
  }
}
