import styles from './TaskRow.module.css'
import { Button } from '../../../ui/Button/Button'

function TaskRow(props) {
  let listStyle = styles.rowContainer
  if (props.bottom) listStyle = styles.rowContainerBottom
  return (
    <div className={listStyle}>
      <label>
        <input className={styles.checkboxRound} type="checkbox" />
        <span>{props.ticketAction}</span>
      </label>
      <Button label={props.buttonType} />
    </div>
  )
}

export default TaskRow
