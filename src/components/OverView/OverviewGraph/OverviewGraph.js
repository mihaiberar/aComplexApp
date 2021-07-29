import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import DataColumn from './DataColumn/DataColumn'
import styles from './OverviewGraph.module.css'

function OverviewGraph(props) {
  const [graphData, setGraphData] = useState(props.data)
  useEffect(() => {
    setGraphData(props.data)
  }, [props.data])

  const data = {
    labels: [...Array(23).keys()],
    datasets: [
      {
        label: 'today',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#3751FF',
        borderColor: '#3751FF'
      },
      {
        label: 'yesterday',
        data: [15, 29, 5, 10, 12, 23],
        fill: false,
        backgroundColor: '#DFE0EB',
        borderColor: '#DFE0EB'
      }
    ]
  }

  const dateString = 'as on ' + new Date().toDateString()
  const options = {
    tension: 0.5,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        position: 'right'
      }
    },
    plugins: {
      title: { align: 'start', display: true, text: ['Today trends', dateString] },
      legend: { align: 'end' }
    }
  }
  // eslint-disable-next-line no-console
  console.log(graphData)
  return (
    <div className={styles.graphContainer}>
      <div className={styles.graph}>
        <Line data={data} options={options} />
      </div>
      <div className={styles.columns}>
        <DataColumn />
      </div>
    </div>
  )
}

export default OverviewGraph
