/* eslint-disable no-unused-vars */
import React from 'react'
import SidebarItem from './sidebarItem/sidebarItem'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './sidebar.module.css'
import agents from '../../images/agents.png'
import tickets from '../../images/tickets.png'
import overview from '../../images/overview.png'
import ideas from '../../images/ideas.png'
import contacts from '../../images/contacts.png'
import articles from '../../images/articles.png'
import settings from '../../images/settings.png'
import subscription from '../../images/subscription.png'
import dashboard from '../../images/stark.png'
import divider from '../../images/divider.png'

const Sidebar = (props) => {
  const history = useHistory()
  const [active, setActive] = useState('None')
  const categories = ['Overview', 'Tickets', 'Ideas', 'Contacts', 'Agents', 'Articles', 'Settings', 'Subscription']
  const imgPaths = [overview, tickets, ideas, contacts, agents, articles, settings, subscription]
  return (
    <div className={props.showSidebar === true ? styles.sidebarContainerActive : styles.sidebarContainer}>
      <div className={styles.dashboardContainer}>
        <img className={styles.dashboardIcon} src={dashboard} alt="StarkDashboard" />
        <div className={styles.dashboardLabel}>Dashboard Kit</div>
      </div>
      {categories.map((item, index) => (
        <div key={index}>
          <SidebarItem
            key={item}
            category={item}
            img={imgPaths[index]}
            onClick={() => {
              setActive(item)
              item === 'Tickets' ? history.push('/tickets') : history.push('/')
            }}
            active={item === active}
          />
          {item === 'Articles' ? <img className={styles.divider} src={divider} alt="Divider" /> : null}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
