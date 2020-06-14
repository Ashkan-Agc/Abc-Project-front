var options = {
    series: [
        {
            name: 'data',
            data: [150, 20, 10, 40, 140, 130, 20, 103, 1, 20, 10, 40, 140, 130]
        }
    ],
    chart: {
        type:"area",
        height: 300,
        toolbar: {
            show: false
        }
    },
    tooltip: {
        theme: 'dark'
    },
    stroke: {
        curve: 'straight',
        width: 1.8,
        colors:["#21ce99"]
    },
    dataLabels: {
        enabled: false
    },

    fill: {
        colors: ['#326678', '#E91E63', '#383e6b'],
        type: 'gradient',
        gradient: {
            shade: 'white',
            type: "vertical",
            shadeIntensity: .15,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: .1,
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
            offsetX: 1
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
var chart = new ApexCharts(document.querySelector("#last10dayschart"), options);

chart.render();


