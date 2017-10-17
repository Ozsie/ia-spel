import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCwWyGUQ--YykBTlM0iK1_e7i9fgpvHEJs',
  authDomain: 'ia-spel.firebaseapp.com',
  databaseURL: 'https://ia-spel.firebaseio.com',
  projectId: 'ia-spel',
  storageBucket: 'ia-spel.appspot.com',
  messagingSenderId: '442991775376'
}

let app = Firebase.initializeApp(config)
let db = app.database()

export default {
  db
}
