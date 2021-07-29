import { connect } from 'react-redux'
import { fetchTickets, filterTickets } from '../../../actions/fetchAction'
import { SheetFooter } from './sheetFooter.js'

const mapStateToProps = (state) => ({
  fetchedTickets: state.fetchedTickets.data,
  filteredTickets: state.fetchedTickets.filteredData
})

const mapDispatchToProps = {
  fetchTickets,
  filterTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(SheetFooter)
