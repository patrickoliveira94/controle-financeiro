import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Moeda',
          fontColor: 'white',
          backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [0, 0.1, 0.1, 0.2, 0.3, 0.4, 0.6, 0.4, 0.3, 0.4, 0.5, 0.4]
        }]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              fontColor: 'white',
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white'
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // renderChart function renders the chart with the datacollection and options object
    this.renderChart(this.datacollection, this.options)
  }
}
