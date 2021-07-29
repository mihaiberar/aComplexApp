import OverviewCard from '../../OverviewCard/OverviewCard'
import styles from './DataColumn.module.css'

function DataColumn() {
  return (
    <div className={styles.listContainer}>
      <OverviewCard field="Resolved" value={60} column={true} />
      <OverviewCard field="Received" value={16} column={true} />
      <OverviewCard field="Average first response" value={43} column={true} />
      <OverviewCard field="Resolution within SLA " value={64} bottom={true} />
    </div>
  )
}

export default DataColumn
