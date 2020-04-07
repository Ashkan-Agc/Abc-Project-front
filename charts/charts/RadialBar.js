import React from 'react'
import Chart from "react-apexcharts";
import CONFIG from 'config'
import '../styles/RadialBar.css'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        stroke: {
          lineCap: 'round'
        },
        fill: {
          colors:['#2951D5','#F45B35'],
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 100,
            type: 'horizontal',
            opacityFrom: 1,
            gradientToColors: ['#65AB9A','#F6B154'],
            opacityTo: 1,
            stops: [0,100]
          }
        },
        plotOptions: {
          radialBar: {
            hollow:{
              size: '40%',
              background: 'transparent',
            },
            track: {
              background: '#565E9B',
              strokeWidth: '24%',
            },
            dataLabels: {
              total: {
                show: true,
                color: CONFIG.labelColor,
                fontSize: '12px',
                formatter: function (w) {
                    return w.globals.seriesTotals[0]
                  }
              },
              name: {
                  show: false,
                },
                value: {
                  show: true,
                  fontSize: '30px',
                  fontFamily: undefined,
                  fontWeight: 300,
                  color: CONFIG.labelColor,
                  offsetY: 8,
                  formatter: function (val) {
                   return val
                 }
                },
            }
          }
        },
      },
      series: [44, 55, 67],
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
   }

  }

  render(){
    return(
      <Chart className="chart-con"
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width='300px'
      />
    )
  }
}
