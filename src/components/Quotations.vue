<template>
  <div class="quotations">
    <h1>{{ title }}</h1>
    <Currencies />
    <Stocks />
  </div>
</template>

<script>
import Currencies from './Currencies'
import Stocks from './Stocks'

export default {
  name: 'Quotations',
  data () {
    return {
      title: 'Cotações'
    }
  },
  components: {
    Currencies,
    Stocks
  }
}
</script>

<style lang="sass" scoped>
  .quotations

    h1
      margin: 5px 0
      border-bottom: 1px solid white
      padding-bottom: 15px
</style>
