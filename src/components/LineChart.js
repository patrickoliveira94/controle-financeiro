import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  props: [
    'backgroundColor',
    'dataLabel',
    'data'
  ],
  mounted () {
    this.renderLineChart()
  },
  computed: {
    chartData: function () {
      return this.data
    }
  },
  methods: {
    renderLineChart: function () {
      this.renderChart(
        {
          labels: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho'
          ],
          datasets: [
            {
              label: this.dataLabel,
              fontColor: 'white',
              backgroundColor: this.backgroundColor,
              data: this.chartData
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        }
      )
    }
  },
  watch: {
    data: function () {
      this.$data._chart.destroy()
      this.renderLineChart()
    }
  }
}
