var data = [150, 20, 10, 40, 140, 130];
var categories = ['MON', 'TUE', 'WED', 'THE', 'FR', 'SAT', 'SUN'];
var maxData = Math.max(...data);
var minData = Math.min(...data);
var dateMax = categories[data.indexOf(Math.max(...data))];
var dateMin = categories[data.indexOf(Math.min(...data))];

var options = {
    series: [
        {
            name: 'data',
            data : data
        }
    ],
    legend: {
        show: false,
        // position: 'top',
        // showForNullSeries: true,
        // showForZeroSeries: true,
        // horizontalAlign: 'right',
        // labels: {
        //     colors: '#aaa',
        //     useSeriesColors: false
        // },
        // markers: {
        //     fillColors: ["#56CDF9", "#FF6359"]
        // }
    },
    tooltip: {
        theme: 'dark'
    },
    chart: {
        type:"area",
        id: 'PERFORMANCE',
        stacked: true,
        toolbar: {
            show: false
        },
    },
    title: {
        text: 'LAST 10 ANALYSIS',
        align: 'left',
        style: {
            fontWeight: undefined,
            fontFamily: undefined,
            color: '#aaa'
        },
    },
    stroke: {
        curve: 'smooth',
        width: 0
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ['#484091'  ],
        opacity: .6,
        type: 'solid'
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
        categories: categories
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
        borderColor: '#51537C'
    },
    annotations: {
        points:
            [
                {
                    x: dateMax,
                    y: maxData,
                    marker: {
                        size: 5,
                        fillColor: "#f7517f",
                        strokeWidth: 0
                    },
                    label: {
                        borderWidth: 0,
                    }
                },
                {
                    x: dateMin,
                    y: minData,
                    marker: {
                        size: 5,
                        fillColor: "#16ceb9",
                        strokeWidth: 0
                    },
                    label: {
                        borderWidth: 0,
                    }
                }
            ]
    }
};


var chart = new ApexCharts(document.querySelector("#performance"), options);

chart.render();
