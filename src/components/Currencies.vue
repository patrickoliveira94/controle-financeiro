<template>
  <div class="currencies">
    <h2>{{ title }}</h2>
    <div class="cards">
      <div v-for="currencie of currencies" :key="currencie.name">
        <div v-if="currencie.name" class="card" @click="loadChart(currencie.name)">
          <h3>{{ currencie.name }}</h3>
          <div class="card-info">
            <span class="card-info-label">Compra</span>
            <span class="card-info-value">{{ currencie.buy ? currencie.buy : '--' }}</span>
          </div>
          <div class="card-info">
            <span class="card-info-label">Venda</span>
            <span class="card-info-value">{{ currencie.sell ? currencie.sell : '--' }}</span>
          </div>
          <div class="card-info">
            <span class="card-info-label">Variação</span>
            <span class="card-info-value" v-bind:class=" currencie.variation >= 0 ? 'positive' : 'negative' ">{{ currencie.variation ? currencie.variation + '%' : '--' }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chart">
      <h3>{{ titleChart }}</h3>
      <line-chart :dataLabel="titleChart" :data="dataChart" :backgroundColor="'#0acf97'"></line-chart>
    </div>
  </div>
</template>

<script>
import Quotation from '../services/quotations'
import LineChart from './LineChart'

export default {
  name: 'Currencies',
  data () {
    return {
      title: 'Moedas',
      currencies: [],
      titleChart: '',
      dataChart: []
    }
  },
  components: {
    LineChart
  },
  methods: {
    loadChart (currencieName) {
      this.dataChart = this.historyMock()
      this.titleChart = currencieName
    },
    historyMock () {
      return Array.from({length: 7}, () => Math.floor(Math.random() * 10))
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

    .cards
      display: flex
      justify-content: center
      flex-wrap: wrap

      .card
        width: 200px
        height: 270px
        background-color: #111417
        border: 1px solid white
        border-radius: 10px
        padding: 10px
        margin: 10px
        cursor: pointer

        .card-info
          display: flex
          flex-direction: column
          margin: 20px 0
          min-height: 55px

          .card-info-value
            margin: 5px 50px
            padding: 3px
            font-weight: bold
            border-radius: 10px

            &.positive
              background-color: #0acf97

            &.negative
              background-color: #e06666

    .chart
      width: 900px
      margin: 10px auto

  @media screen and (max-width: 768px)
    .currencies

      .chart
        width: 90%
</style>
