<template>
  <div class="currencies">
    <h1>{{ title }}</h1>
    <table>
      <tr>
        <th>Nome</th>
        <th>Compra</th>
        <th>Venda</th>
        <th>Variação</th>
      </tr>
      <tr v-for="currencie of currencies" :key="currencie.name" v-bind:class="currencie.variation >= 0 ? 'positive' : 'negative' ">
        <td>{{ currencie.name }}</td>
        <td>{{ currencie.buy }}</td>
        <td>{{ currencie.sell }}</td>
        <td>{{ currencie.variation }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Quotation from '../services/quotations'

export default {
  name: 'Currencies',
  data () {
    return {
      title: 'Moedas',
      currencies: []
    }
  },
  mounted () {
    Quotation.list().then(response => {
      this.currencies = response.data.results.currencies
    })
  }
}
</script>

<style lang="sass" scoped>
  .currencies
    display: flex
    flex-direction: column

    h1
      color: gray

    table
      margin: 0 auto
      min-width: 600px
      border-spacing: 0

      tr

        &.positive
          background-color: #478236
          color: white

        &.negative
          background-color: #e06666
          color: white

        th
          background-color: #3a3a3a
          color: white
          padding: 10px
          text-align: left

        td
          text-align: left
          padding: 5px 10px
</style>
