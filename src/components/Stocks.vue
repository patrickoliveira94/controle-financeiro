<template>
  <div class="stocks">
    <h2>{{ title }}</h2>
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
        <tr v-for="stock of stocks" :key="stock.name">
          <td>{{ stock.name }}</td>
          <td>{{ stock.location }}</td>
          <td>{{ stock.points }}</td>
          <td><span class="tag" v-bind:class="stock.variation >= 0 ? 'positive' : 'negative' ">{{ stock.variation }} %</span></td>
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

        th
          background-color: #111417
          color: white
          padding: 10px
          text-align: left
          border-bottom: 1px solid white

        td
          text-align: left
          padding: 5px 10px

          .tag
            padding: 2px
            border-radius: 10px
            min-width: 70px
            display: block
            text-align: center
            color: white

            &.positive
              background-color: #0acf97

            &.negative
              background-color: #e06666
</style>
