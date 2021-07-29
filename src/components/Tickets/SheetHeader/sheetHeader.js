import React from 'react'
import styles from './sheetHeader.module.css'
import AddSortFilterContainer from '../AddSortFilter/addSortFilterContainer'

function SheetHeader() {
  return (
    <div className={styles.sheet}>
      <div className={styles.sheetHeader}>
        <div>
          <h2>All tickets</h2>
        </div>
        <AddSortFilterContainer />
      </div>
    </div>
  )
}

export { SheetHeader }
