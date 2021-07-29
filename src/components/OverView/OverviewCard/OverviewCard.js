import { useEffect, useState } from 'react'
import styles from './OverviewCard.module.css'

function OverviewCard(props) {
  const [myStyle, setMyStyle] = useState(styles.OverviewCardContainer)

  useEffect(() => {
    if (props.column) setMyStyle(styles.dataColumn)
    if (props.bottom) setMyStyle(styles.dataColumnBottom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function changeOnClickStyle() {
    if (props.list && myStyle === styles.OverviewCardContainer) setMyStyle(styles.clickedCardContainer)
    else if (props.list && myStyle === styles.clickedCardContainer) setMyStyle(styles.OverviewCardContainer)

    if (props.list) props.click(props.field)
  }

  return (
    <div className={myStyle} onClick={changeOnClickStyle}>
      <p className={styles.fieldText}>{props.field}</p>
      <p className={styles.valueText}>{props.value}</p>
    </div>
  )
}
export default OverviewCard
