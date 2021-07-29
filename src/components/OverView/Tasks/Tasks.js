import styles from './Tasks.module.css'
import TaskRow from './TaskRow/TaskRow'
import Modal from '../../Modal/Modal'
import { getAllByCollection, postTask } from '../../../firebase/api'
import { useEffect, useState } from 'react'

function Tasks() {
  const [tasks, setTasks] = useState()
  const [show, setShow] = useState(false)

  useEffect(() => {
    getTasks()
    // eslint-disable-next-line no-console
    console.log(show)
  }, [show])

  async function getTasks() {
    const tasks = await getAllByCollection('tasks')
    setTasks(tasks)
  }
  function showModal() {
    setShow(true)
  }

  function cancelModal() {
    setShow(false)
  }
  async function saveData(title, priority, comment) {
    await postTask(title, priority)
    // eslint-disable-next-line no-console
    console.log(title, priority, comment)
    setShow(false)
  }

  return (
    <div className={styles.tasksContainer}>
      <Modal show={show} save={saveData} cancel={cancelModal} />
      <div className={styles.titleContainer}>
        <p className={styles.title}>Tasks</p>
        <p className={styles.viewAll}>View all</p>
      </div>
      <p className={styles.today}> Today: </p>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.inputField} placeholder="Create new task" />
        <button onClick={showModal}>+</button>
      </div>
      <div>
        {tasks &&
          tasks
            .sort((task1, task2) => (task2.data().createdAt > task1.data().createdAt ? 1 : -1))
            .filter((task, index) => index < 3)
            .map((task, index) => {
              return (
                <TaskRow
                  key={index}
                  ticketAction={task.data().title}
                  buttonType={task.data().priority}
                  bottom={index === tasks.length - 1}
                />
              )
            })}
      </div>
    </div>
  )
}
export default Tasks
