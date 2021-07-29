import React from 'react'
import styles from './header.module.css'
import headerPhoto from '../../ui/assets/Tickets/headerPhoto.png'
import { SearchIcon } from '../Icons/searchIcon'
import { NotificationIcon } from '../Icons/notificationIcon'
import { DividerIcon } from '../Icons/dividerIcon'

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <h1>{props.pageTitle}</h1>
      </div>
      <div className={styles.headerItems}>
        <div className={styles.search}>
          <SearchIcon />
        </div>
        <div className={styles.bell}>
          <NotificationIcon />
        </div>
        <div className={styles.divider}>
          <DividerIcon />
        </div>
        <div className={styles.personName}>
          <p>Jones Ferdinand</p>
        </div>
        <div className={styles.headerPhoto}>
          <img src={headerPhoto} alt="headerPhoto"></img>
        </div>
      </div>
    </div>
  )
}

export { Header }
