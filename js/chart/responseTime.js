var options = {
    series: [
        {
            name: 'data',
            data: [150, 20, 10, 40, 140, 130, 20, 103, 1, 20, 10, 40, 140, 130]
        }
    ],
    chart: {
        type:'area',
        height: 70,
        width: '70%',
        toolbar: {
            show: false
        },
        
    },
    colors:['#21ce99'],
    tooltip: {
        theme: 'dark'
    },
    grid:{
        show:false
    },
    stroke: {
        curve: 'straight',
        width: 2,
        color:'#21ce99'
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'white',
            type: "vertical",
            shadeIntensity: .25,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: .5,
            opacityTo: .2,
        }
    },
    legend: {
        labels: {
           colors:['#eaa323',]
       }
      },
    xaxis: {
        labels: {
            show:false
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        categories: ['03/12', '03/14', '03/12', '03/22', '03/25', '04/03', '04/05', '04/07', '04/08', '04/10', '04/12', '04/14', '04/16', '04/19']
    },
    yaxis: {
        labels: {
            show:false
        }
    },
    grid: {
        show:false
    },
    annotations: {
        xaxis: [
            {
                x: 70,
                x2: 20,
                fillColor: '#F7517F',
                borderColor: '#F7517F',
                opacity: 1
            },
            {
                x: 400,
                x2: 410,
                fillColor: '#F7517F',
                borderColor: '#F7517F',
                opacity: 1
            },
            {
                x: 600,
                x2: 660,
                fillColor: '#F7517F',
                borderColor: '#F7517F',
                opacity: 1
            }
        ]
    }
};
var chart = new ApexCharts(document.querySelector("#response1"), options);

chart.render();
var chart = new ApexCharts(document.querySelector("#response2"), options);

chart.render();
var chart = new ApexCharts(document.querySelector("#response3"), options);

chart.render();


