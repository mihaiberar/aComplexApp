import { connect } from 'react-redux'
import { fetchTickets, updateTickets } from '../../../actions/fetchAction'
import { SheetBody } from './sheetBody.js'

const mapStateToProps = (state) => ({
  fetchedTickets: state.fetchedTickets.data,
  filteredTickets: state.fetchedTickets.filteredData
})

const mapDispatchToProps = {
  fetchTickets,
  updateTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(SheetBody)
