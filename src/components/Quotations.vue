<template>
  <div class="quotations">
    <header>
      <h1>{{ title }}</h1>
      <span class="link" @click="logout()">Sair</span>
    </header>

    <section class="content">
      <Currencies />
      <Stocks />
    </section>
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
      this.$router.push({path: '/login'})
    }
  },
  created () {
    if (!sessionStorage.getItem('auth')) {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="sass" scoped>
  .quotations

    header
      position: fixed
      width: 100%
      padding: 5px
      background-color: #101418
      border-bottom: 3px solid white

      h1
        margin: 0

      .link
        cursor: pointer
        position: absolute
        top: 15px
        right: 30px

    .content
      padding: 50px 0
</style>
