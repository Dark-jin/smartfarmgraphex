import Chart from 'react-apexcharts';
import React from 'react';

function Spinearea() {
    const options = {
        chart: {
            height: 350,
            type: "area"
        },
        dataLabel: {
            enabled: false
        },
        stroke: {
            curve:"smooth",
        },
        xaxis: {
            type:"datetime",
            categories: ["2018-10-06T00:00:00.000z","2018-10-06T01:30:00.000z",
                            "2018-10-06T02:30:00.000z","2018-10-06T03:30:00.000z",
                            "2018-10-06T04:30:00.000z","2018-10-06T05:30:00.000z"
                            ,"2018-10-06T06:30:00.000z"]
        },
        tooltip:{
            x:{
                format: "dd/MM/YY HH:mm"
            },
        },
    }
    const series = [{
            name: "samsung",
            data:[31,40,28,51,42,109,100]},
            {
            name:"apple",
            data:[11,32,45,32,34,52,41]
        }];
    
    return(
        <div>
            <Chart type="area" options={options} series={series} />
        </div>
    )
}
export default Spinearea;