import React from 'react'
import styles from './sidebarItem.module.css'

const SidebarItem = (props) => {
  return (
    <div className={!props.active ? styles.sidebarItem : styles.activeItem} onClick={props.onClick}>
      <img className={styles.icon} src={props.img} alt="Icon" />
      <div className={!props.active ? styles.category : styles.activeCategory}>{props.category}</div>
    </div>
  )
}

export default SidebarItem
