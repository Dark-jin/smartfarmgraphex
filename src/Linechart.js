import Chart from 'react-apexcharts';
import React from 'react';

export default props =>{

    const options = {
        chart: {
            zoom: {
                enabled: false
            },
            animations: {
                easing: "linear",
                dynamicAnimation: {
                    speed: 500
                }
            }
        },
        stroke: {
            curve: "smooth"
        },
        tooltip: {
            x: {
                format: "yyyy/MM/dd HH:mm:ss.f"
            }
        },
        xaxis: {
            type: "datetime",
            range: props.range
        },
        yaxis: {
            labels: {
                formatter: val => val.toFixed(0)
            },
            title: {text:"Value"},
        }
    };

    return(
        <Chart type="line" options={options} series={props.dataList}/>
    );
}