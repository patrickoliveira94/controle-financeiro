<template>
  <div class="currencies">
    <h2>{{ title }}</h2>
    <table>
      <tr>
        <th>Nome</th>
        <th>Compra</th>
        <th>Venda</th>
        <th>Variação</th>
      </tr>
      <tr v-for="currencie of currencies" :key="currencie.name">
        <td>{{ currencie.name }}</td>
        <td>{{ currencie.buy }}</td>
        <td>{{ currencie.sell }}</td>
        <td><span class="tag" v-if="currencie.variation" v-bind:class="currencie.variation >= 0 ? 'positive' : 'negative' ">{{ currencie.variation }} %</span></td>
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
