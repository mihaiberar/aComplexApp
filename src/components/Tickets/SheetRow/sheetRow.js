import React from 'react'
import styles from './sheetRow.module.css'
import { DragIcon } from '../Icons/dragIcon'
import { Button } from '../../ui/Button/Button'

function SheetRow(props) {
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>
        <div className={styles.contact}>
          <img className={styles.firstContactPhoto} src={props.contactPhoto} alt="firstContactPhoto"></img>
          <div>
            <p>{props.title}</p>
            <p className={styles.contactInfo}>Updated 1 day ago</p>
          </div>
        </div>
      </div>
      <div className={styles.tableCell}>
        <p>Tom Cruise</p>
        <p className={styles.contactInfo}>{props.createdAt}</p>
      </div>
      <div className={styles.tableCell}>
        <p>{props.createdAt}</p>
        <p className={styles.contactInfo}>6:30 PM</p>
      </div>
      <div className={styles.tableCell}>
        <Button label="high" />
      </div>
      <div className={styles.tableCell}>
        <DragIcon />
      </div>
    </div>
  )
}

export { SheetRow }
