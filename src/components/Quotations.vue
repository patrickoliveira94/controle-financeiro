<template>
    <div class="quotations">
        <h1>{{ title }}</h1>
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  name: 'Quotations',
  data () {
    return {
      title: 'Cotações'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

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
