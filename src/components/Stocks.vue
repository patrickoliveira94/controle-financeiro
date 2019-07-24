<template>
  <div class="stocks">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Localização</th>
          <th>Pontos</th>
          <th>Variação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock of stocks" :key="stock.name" v-bind:class="stock.variation >= 0 ? 'positive' : 'negative' ">
          <td>{{ stock.name }}</td>
          <td>{{ stock.location }}</td>
          <td>{{ stock.points }}</td>
          <td>{{ stock.variation }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Quotation from '../services/quotations'

export default {
  name: 'Stocks',
  data () {
    return {
      title: 'Bolsas de valores',
      stocks: []
    }
  },
  mounted () {
    Quotation.list().then(response => {
      this.stocks = response.data.results.stocks
    })
  }
}
</script>

<style lang="sass" scoped>
  .stocks
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
