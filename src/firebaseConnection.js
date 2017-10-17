let Firebase = require('firebase')

let config = {
  apiKey: 'AIzaSyCwWyGUQ--YykBTlM0iK1_e7i9fgpvHEJs',
  authDomain: 'ia-spel.firebaseapp.com',
  databaseURL: 'https://ia-spel.firebaseio.com',
  projectId: 'ia-spel',
  storageBucket: 'ia-spel.appspot.com',
  messagingSenderId: '442991775376'
}

let app = Firebase.initializeApp(config)

module.exports = {
  app: app
}
