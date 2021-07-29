import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import closeButton from '../ui/assets/closeButton.svg'

function Modal(props) {
  const [show, setShow] = useState(props.show)
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [priority, setPriority] = useState('High')

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  function closeModal() {
    props.cancel()
  }

  function titleChangeHandler(event) {
    setTitle(event.target.value)
  }

  function commentChangeHandler(event) {
    setComment(event.target.value)
  }

  function priorityChangeHandler(event) {
    setPriority(event.target.value)
  }
  function saveHandler() {
    props.save(title, priority, comment)
    setComment('')
    setTitle('')
    setPriority('High')
  }

  return show ? (
    <div className={styles.modal}>
      <div className={styles.content}>
        <span onClick={closeModal} className={styles.xButton}>
          <img src={closeButton} alt="closeButton" />
        </span>
        <div className={styles.ticketForm}>
          <label className={styles.newTicketName}>New ticket</label>
          <label className={styles.labelInput}>
            Title
            <input
              type="text"
              onChange={(event) => {
                titleChangeHandler(event)
              }}
              value={title}
              className={styles.titleInput}
            />
          </label>
          <label className={styles.labelInput}>
            Priority
            <select
              className={styles.selectOption}
              onChange={(event) => {
                priorityChangeHandler(event)
              }}
            >
              <option>High</option>
              <option>Default</option>
            </select>
          </label>
          <label className={styles.labelInput}>
            Comment
            <textarea
              className={styles.leaveAComment}
              onChange={(event) => {
                commentChangeHandler(event)
              }}
              value={comment}
            />
          </label>
          <div className={styles.actions}>
            <button className={styles.cancelButton} onClick={closeModal}>
              Cancel
            </button>
            <button className={styles.saveButton} onClick={saveHandler}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
export default Modal
