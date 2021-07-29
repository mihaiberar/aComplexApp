import React from 'react'
import styles from './tickets.module.css'
import { Header } from './Header/header.js'
import { Sheet } from './Sheet/sheet'
import Sidebar from '../sidebar/sidebar'
import menu from '../../images/menu.svg'
import { useState } from 'react'

function Tickets() {
  const [activeSidebar, setActiveSidebar] = useState(true)
  return (
    <div className={styles.ticketsContainer}>
      <div>
        <Sidebar showSidebar={activeSidebar} />
      </div>
      <div className={activeSidebar ? styles.ticketsActive : styles.tickets}>
        <img src={menu} alt="Menu bar" className={styles.menuBar} onClick={() => setActiveSidebar(!activeSidebar)} />
        <Header pageTitle="Tickets" />
        <Sheet />
      </div>
    </div>
  )
}

export { Tickets }
