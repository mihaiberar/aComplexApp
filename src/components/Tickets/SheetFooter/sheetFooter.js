import React, { useEffect, useState } from 'react'
import styles from './sheetFooter.module.css'
import { DropDownIcon } from '../Icons/dropDownIcon'
import { LeftArrowIcon } from '../Icons/leftArrowIcon'
import { RightArrowIcon } from '../Icons/rightArrowIcon'

function SheetFooter(props) {
  const [rows, setRows] = useState([])
  const [selector, showSelector] = useState(false)
  const [noOfRows, setNoOfRows] = useState('')
  const [start, setStart] = useState(0)

  // eslint-disable-next-line no-console
  console.log(rows)

  useEffect(() => {
    props.fetchTickets()
    // setNoOfRows(props.fetchedTickets.length)
    // // eslint-disable-next-line no-console
    // console.log(props.fetchedTickets)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRows([...props.fetchedTickets])
    setNoOfRows(props.filteredTickets.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fetchedTickets])

  function loadRow(start, limit) {
    const limitValue = start + parseInt(limit)
    const currentRows = rows.slice(start, limitValue)
    // eslint-disable-next-line no-console
    console.log(start, limitValue)
    // const currentRows = [
    //   ...rows.filter((rowItem, index) => {
    //     // // eslint-disable-next-line no-console
    //     // console.log('sau', index >= start || index < limitValue)
    //     // eslint-disable-next-line no-console
    //     console.log('si', index >= start && index < limitValue)
    //     // eslint-disable-next-line no-console
    //     console.log(index, limitValue)
    //     return index >= start && index < limitValue
    //   })
    // ]
    props.filterTickets(currentRows)
    setStart(start + parseInt(limit))
  }

  function showTheSelector() {
    showSelector(true)
  }

  function hideTheSelector() {
    showSelector(false)
  }

  function handleChange(event) {
    loadRow(start, event.target.value)
    hideTheSelector()
    setNoOfRows(event.target.value)
    // eslint-disable-next-line no-console
    console.log(event.target.value)
    // // eslint-disable-next-line no-console
    // console.log(change)
  }

  return (
    <div className={styles.sheetFooter}>
      <div className={styles.rowsNumber}>
        <p className={styles.rowsPerPage}>Rows per page:</p>
        <p className={styles.number}>{noOfRows}</p>
        <div className={styles.svgNumbers}>
          {!selector ? (
            <DropDownIcon onClick={showTheSelector} />
          ) : (
            <select onChange={handleChange} className={styles.select}>
              <option></option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value={rows.length}>All rows</option>
            </select>
          )}
        </div>
      </div>
      <div className={styles.totalRows}>
        <p>
          {start === 0 ? 1 : start + 1 - parseInt(noOfRows)}-{start === 0 ? noOfRows : start} of {rows.length}
        </p>
        <div className={styles.svgNumbers}>
          <LeftArrowIcon />
        </div>
        <div
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(start, noOfRows)
            loadRow(start, noOfRows)
          }}
          className={styles.svgNumbers}
        >
          <RightArrowIcon />
        </div>
      </div>
    </div>
  )
}

export { SheetFooter }
