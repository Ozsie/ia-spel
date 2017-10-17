<template>
  <div class="login">
    Login
  </div>
</template>

<script>
import fc from '../firebaseConnection'
let testRef = fc.db.ref('test')

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
