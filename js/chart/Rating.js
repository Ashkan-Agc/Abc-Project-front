var options1 = {
    series: [
        {
            name: 'LOW',
            data: [55, 30, 51, 62, 18, 20, 22, 32, 42, 3, 4, 23, 4, 22, 24, 34]
        }
    ],
    chart: {
        toolbar: {
            show: false
        },
        hight:"100%",
        type: 'area',
        stacked: false,
        background: '#313768'
    },
    legend: {
        show: false,
    },
    stroke: {
        colors: ["#42f58a"],
        curve: 'straight',
        width: 1
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ["#42f58a",'#eb2a2a'],
        gradient: {
            shade: 'white',
            type: "vertical",
            shadeIntensity: .25,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: .5,
            opacityTo: .1,
        }
    },
    tooltip: {
        enabled: true,
        theme:'dark'
    },
    xaxis: {
        labels: {
            show: false,
            offsetX: -20
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
            show: false
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    }
};
var chart = new ApexCharts(document.querySelector("#chartRating1"), options1);
chart.render();
var options2 = {
    series: [
        {
            name: 'CRITICAL',
            data: [55, 30, 51, 62, 18, 20, 22, 32, 42, 3, 4, 23, 4, 22, 24, 34]
        }
    ],
    chart: {
        toolbar: {
            show: false
        },
        hight:"100%",
        type: 'area',
        stacked: false,
        background: '#313768'
    },
    legend: {
        show: false,
    },
    stroke: {
        colors: ["#BC3057"],
        curve: 'straight',
        width: 1
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ["#BC3057"],
        gradient: {
            shade: 'white',
            type: "vertical",
            shadeIntensity: .25,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: .5,
            opacityTo: .1,
        }
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        color:['#fffff']
    },
    xaxis: {
        labels: {
            show: false,
            offsetX: -20
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
            show: false
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    }
};
var chart = new ApexCharts(document.querySelector("#chartRating2"), options2);
chart.render();
var options3 = {
    series: [
        {
            name: 'HIGH',
            data: [55, 30, 51, 62, 18, 20, 22, 32, 42, 3, 4, 23, 4, 22, 24, 34]
        }
    ],
    chart: {
        toolbar: {
            show: false
        },
        hight:"100%",
        type: 'area',
        stacked: false,
        background: '#313768'
    },
    legend: {
        show: false,
    },
    stroke: {
        colors: ["#EAA323"],
        curve: 'straight',
        width: 1
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ["#EAA323"],
        gradient: {
            shade: '    ',
            type: "vertical",
            shadeIntensity: .25,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: .5,
            opacityTo: .1,
        }
    },
    tooltip: {
        enabled: true,
        theme:'dark'
    },
    xaxis: {
        labels: {
            show: false,
            offsetX: -20
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
            show: false
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    }
};
var chart = new ApexCharts(document.querySelector("#chartRating3"), options3);
chart.render();
var options4 = {
    series: [
        {
            name: 'MEDIUM',
            data: [55, 30, 51, 62, 18, 20, 22, 32, 42, 3, 4, 23, 4, 22, 24, 34]
        }
    ],
    chart: {
        toolbar: {
            show: false
        },
        width:"100%",
        hight:"100%",
        type: 'area',
        stacked: false,
        background: '#313768'
    },
    legend: {
        show: false,
    },
    stroke: {
        colors: ["#16CEB9"],
        curve: 'straight',
        width: 1
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ["#16CEB9"],
        gradient: {
            shade: 'white',
            type: "vertical",
            shadeIntensity: .25,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: .5,
            opacityTo: .1,
        }
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
    },
    xaxis: {
        labels: {
            show: false,
            offsetX: -20
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
            show: false
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    }
};
var chart = new ApexCharts(document.querySelector("#chartRating4"), options4);
chart.render();




