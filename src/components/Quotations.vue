<template>
  <div class="quotations">
    <header>
      <h1>{{ title }}</h1>
      <span class="link" @click="logout()">Sair</span>
    </header>
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
  },
  methods: {
    logout () {
      sessionStorage.removeItem('auth')
      this.$router.push({path: '/'})
    }
  },
  created () {
    if (!sessionStorage.getItem('auth')) {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="sass" scoped>
  .quotations

    header
      margin: 5px 0
      border-bottom: 1px solid white

      .link
        cursor: pointer
        position: absolute
        top: 32px
        right: 30px
</style>
