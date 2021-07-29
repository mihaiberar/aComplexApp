/* eslint-disable no-console */
import React from 'react'
import styles from './sheetBody.module.css'
import { SheetRow } from '../SheetRow/sheetRow'
import { SortIcon } from '../Icons/sortIcon'

import firstContactPhoto from '../../ui/assets/Tickets/firstContactPhoto.png'
import secondContactPhoto from '../../ui/assets/Tickets/secondContactPhoto.png'
import thirdContactPhoto from '../../ui/assets/Tickets/thirdContactPhoto.png'
import fourthContactPhoto from '../../ui/assets/Tickets/fourthContactPhoto.png'
import fifthContactPhoto from '../../ui/assets/Tickets/fifthContactPhoto.png'
import sixthContactPhoto from '../../ui/assets/Tickets/sixthContactPhoto.png'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// import { getAllByCollection } from '../../../firebase/api'
import { useEffect, useState } from 'react'
import {} from '../../../actions/fetchAction'

function SheetBody(props) {
  const contactsArray = [
    { id: 1, contactPhoto: firstContactPhoto },
    { id: 2, contactPhoto: secondContactPhoto },
    { id: 3, contactPhoto: thirdContactPhoto },
    { id: 4, contactPhoto: fourthContactPhoto },
    { id: 5, contactPhoto: fifthContactPhoto },
    { id: 6, contactPhoto: sixthContactPhoto }
  ]

  const [tickets, setTickets] = useState([])

  function drag(par) {
    // eslint-disable-next-line no-console
    console.log(par)
    const auxTickets = Array.from(tickets)
    const [reorderedItem] = auxTickets.splice(par[0].source.index, 1)
    auxTickets.splice(par[0].destination.index, 0, reorderedItem)
    setTickets(auxTickets)
  }

  useEffect(() => {
    props.fetchTickets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTickets([...props.filteredTickets])
  }, [props.filteredTickets])

  const sortByTicketDetails = () => {
    const sorted = tickets.sort((a, b) => a.data().title.localeCompare(b.data().title))
    setTickets([...sorted])
  }

  const sortByName = () => {
    const sorted = tickets.sort((a, b) => a.data().comment.localeCompare(b.data().comment))
    setTickets([...sorted])
  }

  const sortByDate = () => {
    const sorted = tickets.sort((a, b) => a.data().createdAt.toDate() - b.data().createdAt.toDate())
    setTickets([...sorted])
  }

  return (
    <div>
      <DragDropContext className={styles.table} onDragEnd={(...props) => drag(props)}>
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>
              <SortIcon sortMethod={sortByTicketDetails} />
              <span className={styles.tableCellName}>Ticket details</span>
            </div>
            <div className={styles.tableCell}>
              <SortIcon sortMethod={sortByName} />
              <span className={styles.tableCellName}>Customer name</span>
            </div>
            <div className={styles.tableCell}>
              <SortIcon sortMethod={sortByDate} />
              <span className={styles.tableCellName}>Date</span>
            </div>
            <div className={styles.tableCell}>
              <SortIcon />
              <span className={styles.tableCellName}>Priority</span>
            </div>
            <div className={styles.tableCell}></div>
          </div>
        </div>
        <Droppable className={styles.table} droppableId="droppable-1">
          {(provided, _) => (
            <div className={styles.table} ref={provided.innerRef} {...provided.droppableProps}>
              {tickets.map((item, index) => {
                return (
                  <Draggable key={item.id} className={styles.noStyle} draggableId={item.id} index={index}>
                    {(provided, _) => (
                      <div
                        className={styles.noStyle}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <SheetRow
                          contactPhoto={contactsArray[item.data().image].contactPhoto}
                          createdAt={item.data().createdAt.toDate().toDateString()}
                          title={item.data().title}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export { SheetBody }
