import { connect } from 'react-redux'
import { fetchTickets, filterTickets } from '../../../actions/fetchAction'
import { AddSortFilter } from './addSortFilter'

const mapStateToProps = (state) => ({
  fetchedTickets: state.fetchedTickets.data,
  filteredTickets: state.fetchedTickets.filteredData
})

const mapDispatchToProps = {
  fetchTickets,
  filterTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSortFilter)
