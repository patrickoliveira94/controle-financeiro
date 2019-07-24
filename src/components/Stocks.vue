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
        <tr v-for="stock of stocks" :key="stock.name">
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

      thead
        background-color: gray
        color: white
</style>
