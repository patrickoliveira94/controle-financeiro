<template>
  <div class="currencies">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor de compra</th>
          <th>Valor de venda</th>
          <th>Variação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currencie of currencies" :key="currencie.name">
          <td>{{ currencie.name }}</td>
          <td>{{ currencie.buy }}</td>
          <td>{{ currencie.sell }}</td>
          <td>{{ currencie.variation }}</td>
        </tr>
      </tbody>
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

      thead
        background-color: gray
        color: white
</style>
