<template>
  <div class="currencies">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Currencies',
  data () {
    return {
      title: 'Moedas'
    }
  }
}
</script>

<style lang="sass" scoped>
  .currencies

    h1
      color: gray
</style>
