var options = {
    series: [
        {
            name: 'data',
            data: [150, 20, 10, 40, 140, 130]
        },
        {
            name: 'LOWEST',
            data: []
        },
        {
            name: 'HIGHEST',
            data: []
        }
    ],
    legend: {
        show: true,
        position: 'top',
        showForNullSeries: true,
        showForZeroSeries: true,
        horizontalAlign: 'right',
        labels: {
            colors: '#aaa',
            useSeriesColors: false
        },
        markers: {
            fillColors: ["#56CDF9", "#FF6359"]
        }
    },
    tooltip: {
        theme: 'dark'
    },
    chart: {
        id: 'PERFORMANCE',
        stacked: true,
        toolbar: {
            show: false
        },
        colors:'#fff'
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
        colors: ['#aaa'],
        opacity: 1,
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
        categories: ['MON', 'TUE', 'WED', 'THE', 'FR', 'SAT', 'SUN']
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
};
var chart = new ApexCharts(document.querySelector("#performance"), options);
chart.render();




