/*
developed by Ashkan Ganj
Github: @Ashkan-Agc 
Email: agc.ashkan79@gmail.com

 */

var options = {
    series: [
        {
            name: 'Response time',
            data: [150, 20, 10, 40, 140, 130, 20, 103, 1, 20, 10, 40, 140, 130]
        }
    ],
    chart: {
        toolbar: {
            show: false
        },
        type: 'area',
        stacked: false,
        background: '#313768'
    },
    tooltip: {
        theme: 'dark'
    },
    stroke: {
        curve: 'straight',
        width: 1.2
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        gradient: {
            enabled: true,
            opacityFrom: 0.45,
            opacityTo: 0
        }
    },
    xaxis: {
        labels: {
            style: {
                colors: '#B3BBFD',
            },
            offsetY: 2
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
            style: {
                colors: '#B3BBFD',
            },
            offsetX: -10
        }
    },
    grid: {
        borderColor: '#272C55'
    },
    annotations: {
        xaxis: [
            {
                x: 140,
                x2: 120,
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
            }
        ]
    }
};


var chart = new ApexCharts(document.querySelector(id = "response"), options);

chart.render();

