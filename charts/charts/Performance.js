import React from 'react'
import Chart from "react-apexcharts";
import CONFIG from 'config'
import '../styles/Performance.css'

export default class extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        options: {
          legend: {
            show: true,
            position:'top',
            showForNullSeries: true,
            showForZeroSeries: true,
            horizontalAlign: 'right',
            labels: {
              colors: [CONFIG.labelColor],
              useSeriesColors: false
            },
            markers: {
              fillColors:[CONFIG.boxBackColor,"#56CDF9","#FF6359"]
            }
          },
          tooltip: {
            theme:'dark'
          },
          chart:{
            id:'PERFORMANCE',
            stacked: true,
            toolbar: {
              show: false
            }
          },
          title: {
            text: 'LAST 10 ANALYSIS',
            align: 'left',
            style: {
              fontSize:  CONFIG.labelFontSize,
              fontWeight:  undefined,
              fontFamily:  undefined,
              color:  CONFIG.labelColor
            },
          },
          stroke:{
            curve:'smooth',
            width: 0
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            colors:['#484091'],
            opacity:0.8,
            type:'solid'
          },
          xaxis: {
            labels: {
              style: {
                colors: '#B3BBFD',
              },
              offsetY:2
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            categories: ['MON', 'TUE', 'WED', 'THE', 'FR', 'SAT' , 'SUN']
          },
          yaxis:{
            labels:{
              style:{
                colors:'#B3BBFD',
              },
              offsetX:-10
            }
          },
          grid:{
            borderColor:'#51537C'
          },
          annotations: {
            points:
              [
                {
                  x: 'WED',
                  y: 12,
                  marker: {
                    size: 5,
                    fillColor: "#56CDF9",
                    strokeWidth: 0
                  },
                  label: {
                    borderWidth: 0,
                  }
                },
                {
                  x: 'MON',
                  y: 150,
                  marker: {
                    size: 5,
                    fillColor: "#FF6359",
                    strokeWidth: 0
                  },
                  label: {
                    borderWidth: 0,
                  }
                }
              ]
          }
        },
        series:[
          {
            name:'',
            data: [150,20,10,40,140,130]
          },
          {
            name:'LOWEST',
            data: []
          },
          {
            name:'HIGHEST',
            data: []
          }
        ]
    }
}
    render() {
      return (
              <Chart
                options={this.state.options}
                series={this.state.series}
                type='area'
                width='100%'
              />
      );
    }
}
