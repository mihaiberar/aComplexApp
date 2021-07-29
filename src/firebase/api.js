import firebase from '.'

export const registerUser = async (createdAt, email, password, name) => {
  const db = firebase.firestore()
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return db.collection('users').doc(response.user.uid).set({
          name: name,
          email: email,
          createdAt: createdAt
        })
      })
  } catch (error) {
    return {
      code: error.code,
      message: error.message
    }
  }
}

export const loginUser = async (email, password) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      alert('Invalid email or password')
      return {
        code: error.code,
        message: error.message
      }
    })
  // eslint-disable-next-line no-console
  console.log(response)
  return response.user
}

export const getAllByCollection = async (collection) => {
  const db = firebase.firestore()
  const collectionData = await db.collection(collection).get()
  // eslint-disable-next-line no-console
  return collectionData.docs
}

export const postUser = async (name, email) => {
  const db = firebase.firestore()
  db.collection('users')
    .add({
      name: name,
      email: email
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Document successfully written!')
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error writing document: ', error)
    })
}

export const postTask = async (title, priority) => {
  const db = firebase.firestore()
  await db
    .collection('tasks')
    .add({
      title: title,
      priority: priority,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      // eslint-disable-next-line no-console
      return true
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      return error
    })
}

export const postTicket = async (title, priority, comment) => {
  const db = firebase.firestore()
  await db
    .collection('tickets')
    .add({
      comment: comment,
      title: title,
      priority: priority,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response)
      return true
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
      return error
    })
}
