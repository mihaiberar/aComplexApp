import OverviewCard from '../OverviewCard/OverviewCard'
import styles from './OverviewCardList.module.css'

function OverviewCardList(props) {
  return (
    <div className={styles.listContainer}>
      <OverviewCard field="Unresolved" value={60} list={true} click={props.click} />
      <OverviewCard field="Overdue" value={16} list={true} click={props.click} />
      <OverviewCard field="Open" value={43} list={true} click={props.click} />
      <OverviewCard field="On hold" value={64} list={true} click={props.click} />
    </div>
  )
}

export default OverviewCardList
