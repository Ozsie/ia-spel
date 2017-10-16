<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tbody>
      <tr v-for="test in tests">
        <td>{{test}}</a></td>
      </tr>
    </tbody>
    <router-view/>
  </div>
</template>

<script>
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
let testRef = db.ref('test')

export default {
  name: 'app',
  firebase: {
    tests: testRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
