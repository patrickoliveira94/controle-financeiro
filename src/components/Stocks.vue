<template>
  <div class="stocks">
    <h2>{{ title }}</h2>
    <div class="cards">
      <div class="card" v-for="stock of stocks" :key="stock.name">
        <h3>{{ stock.name }}</h3>
        <div class="card-info">
          <span class="card-info-label">Localização</span>
          <span class="card-info-value">{{ stock.location ? stock.location : '--' }}</span>
        </div>
        <div class="card-info">
          <span class="card-info-label">Pontos</span>
          <span class="card-info-value">{{ stock.points ? stock.points : '--' }}</span>
        </div>
        <div class="card-info">
          <span class="card-info-label">Variação</span>
          <span class="card-info-value" v-bind:class=" stock.variation >= 0 ? 'positive' : 'negative' ">{{ stock.variation ? stock.variation + '%' : '--' }}</span>
        </div>
      </div>
    </div>
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

    .cards
      display: flex
      justify-content: center
      flex-wrap: wrap

      .card
        width: 230px
        height: 300px
        background-color: #111417
        border: 1px solid white
        border-radius: 10px
        padding: 10px
        margin: 10px

        .card-info
          display: flex
          flex-direction: column
          margin: 20px 0
          min-height: 70px

          .card-info-value
            margin: 5px 50px
            padding: 3px
            font-weight: bold
            border-radius: 10px

            &.positive
              background-color: #0acf97

            &.negative
              background-color: #e06666
</style>
