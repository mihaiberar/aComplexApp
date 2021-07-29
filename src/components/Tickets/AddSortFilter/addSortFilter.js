import React from 'react'
import styles from './addSortFilter.module.css'
import { AddIcon } from '../Icons/addIcon'
import { SortIcon } from '../Icons/sortIcon'
import { FilterIcon } from '../Icons/filterIcon'
import Modal from '../../Modal/Modal'

import { postTicket } from '../../../firebase/api'
import { useEffect, useState } from 'react'

function AddSortFilter(props) {
  const [tickets, setTickets] = useState([])
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    props.fetchTickets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTickets([...props.fetchedTickets])
  }, [props.fetchedTickets])

  function showTheInput() {
    setShowInput(true)
  }

  function clearInput() {
    setInput('')
    setShowInput(false)
    props.filterTickets(tickets)
  }

  function handleInput(event) {
    const newFilteredTickets = tickets.filter((ticket) => {
      return (
        ticket.data().createdAt.toDate().toDateString().toLowerCase().includes(event.target.value.toLowerCase()) ||
        ticket.data().priority.toString().toLowerCase().includes(event.target.value.toLowerCase()) ||
        ticket.data().title.toString().toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    props.filterTickets(newFilteredTickets)
    setInput(event.target.value)
  }

  function showModal() {
    setShow(true)
  }

  function cancelModal() {
    setShow(false)
  }

  const saveData = async (title, priority, comment) => {
    // eslint-disable-next-line no-console
    console.log(title, priority, comment)
    const image = Math.floor(Math.random() * 6)
    await postTicket(title, priority, comment, image)
    // eslint-disable-next-line no-console
    console.log(title, priority, comment)
    setShow(false)
    props.fetchTickets()
  }

  return (
    <div className={styles.ticketFunctions}>
      <Modal show={show} save={saveData} cancel={cancelModal} />
      <div className={styles.function} onClick={showModal}>
        <AddIcon />
        <p>Add Ticket</p>
      </div>
      <div className={styles.function}>
        <SortIcon />
        <p>Sort</p>
      </div>
      <div onClick={showTheInput} className={!showInput ? styles.function : styles.hideInput}>
        <FilterIcon />
        <p>Filter</p>
      </div>
      <div className={styles.function}>
        <div className={showInput ? null : styles.hideInput}>
          <input
            placeholder="Filter"
            className={styles.filterInput}
            value={input}
            onChange={(event) => handleInput(event)}
          ></input>
          <button
            className={styles.filterBtn}
            onClick={() => {
              clearInput()
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export { AddSortFilter }
