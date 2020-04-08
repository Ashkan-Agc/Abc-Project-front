var options = {
    series: [44, 55, 67],
    chart: {
        height: 350,
        type: 'radialBar',
        background: '#313768',
        toolbar: {
            show: true
        }
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '20px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                    }
                }
            }
        }
    },
    track: {
        background: '#313768',
        strokeWidth: 2,
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 5,
          opacity: 0.35
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.4,
          gradientToColors: ['#4646D3', '#16CEB9'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
    labels: ['Apples', 'Oranges', 'Bananas'],
};


var chart = new ApexCharts(document.querySelector("#webappcond"), options);
chart.render();
