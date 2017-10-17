<template>
  <div class="login">
    Login
  </div>
</template>

<script>
let fc = require('../firebaseConnection')
let app = fc.app

let db = app.database()
let testRef = db.ref('test')

export default {
  firebase: {
    tests: testRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
