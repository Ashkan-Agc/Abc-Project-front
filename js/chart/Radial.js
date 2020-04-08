var options = {
    series: [80, 69, 51],
    chart: {
        height: 220,
        type: 'radialBar',
        background: '#313768',
        toolbar: {
            show: true
        }
    },
    stroke: {
        lineCap: 'round'
        
    },
    plotOptions: {
        radialBar: {
          hollow:{
            size: '40%',
            background: 'transparent',
          },
          track: {
            background: '#565E9B',
            strokeWidth: '15%',
          },
          dataLabels: {
            total: {
              show: true,
              color: "#FFFFFF",
              fontSize: '15px',
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
                color: "#FFFFFF",
                offsetY: 8,
                formatter: function (val) {
                 return val
               }
              },
          }
        }
      },
    track: {
        background: '#313768',
        strokeWidth: 0.3,
        margin: 100, // margin is in pixels
        dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 5,
            opacity: 0.35
        }
    },
    fill: {
        colors: ['#2951D5','#9b2ebf', '#F45B35'],
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 100,
            type: 'vertical',
            opacityFrom: 1,
            gradientToColors: ['#65AB9A','#f135f4', '#F6B154'],
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    labels: ['Apples', 'Oranges', 'Bananas'],
};


var chart = new ApexCharts(document.querySelector("#webappcond"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#networkcond"), options);
chart.render();
