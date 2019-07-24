<template>
  <div class="stocks">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Stocks',
  data () {
    return {
      title: 'Bolsas de valores'
    }
  }
}
</script>

<style lang="sass" scoped>
  .stocks

    h1
      color: gray
</style>
