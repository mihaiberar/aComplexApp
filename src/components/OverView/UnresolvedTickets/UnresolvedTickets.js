import styles from './UnresolvedTickets.module.css'

function UnresolvedTickets() {
  const listData = ['Waiting On Feature Request', 'Awaiting Customer Response', 'Awaiting Developer Fix', 'Pending']
  const values = [4238, 1005, 918, 281]

  const list = listData.map((data, index) => {
    let listStyle = styles.list
    if (index === listData.length - 1) listStyle = styles.listBottom
    return (
      <div className={listStyle} key={index}>
        <p>{data}</p>
        <p>{values[index]}</p>
      </div>
    )
  })
  return (
    <div className={styles.ticketsContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Unresolved tickets</p>
        <p className={styles.viewDetails}>View details</p>
      </div>
      <p>
        <span className={styles.group}> Group: </span>
        Support
      </p>
      {list}
    </div>
  )
}
export default UnresolvedTickets
