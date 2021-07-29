/* eslint-disable no-console */
import OverviewCardList from './OverviewCardList/OverviewCardList'
import OverviewGraph from './OverviewGraph/OverviewGraph'
import UnresolvedTickets from './UnresolvedTickets/UnresolvedTickets'
import Tasks from './Tasks/Tasks'
import Sidebar from '../sidebar/sidebar'
import { Header } from '../Tickets/Header/header'
import menu from '../../images/menu.svg'
import styles from './Overview.module.css'
import { useState } from 'react'

function Overview() {
  const [activeSidebar, setActiveSidebar] = useState(true)
  const [graphData, setGraphData] = useState('')
  function changeGraphData(data) {
    if (!graphData.includes(data)) setGraphData([...graphData, data])
    else setGraphData(graphData.filter((graphData) => graphData !== data))
  }

  return (
    <div className={styles.OverviewContainer}>
      <Sidebar showSidebar={activeSidebar} />
      <div className={activeSidebar ? styles.GraphContainerActive : styles.GraphContainer}>
        <img src={menu} alt="Menu bar" className={styles.menuBar} onClick={() => setActiveSidebar(!activeSidebar)} />
        <Header pageTitle="Overview" />
        <OverviewCardList click={changeGraphData} />
        <OverviewGraph data={graphData} />
        <div className={styles.ticketsContainer}>
          <UnresolvedTickets />
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default Overview
