import firebase from 'firebase'
var firebaseConfig = {
  apiKey: 'AIzaSyDtAYYMNKRzEHgS1uqHMEs04eJGuntAL1Y',
  authDomain: 'tickets-app-c564c.firebaseapp.com',
  databaseURL: 'https://tickets-app-c564c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tickets-app-c564c',
  storageBucket: 'tickets-app-c564c.appspot.com',
  messagingSenderId: '1073371940635',
  appId: '1:1073371940635:web:cfe770ba4bddd87d36b5be',
  measurementId: 'G-W7E73SGHE6'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
