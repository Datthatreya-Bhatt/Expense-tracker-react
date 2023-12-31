import React from "react";

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props)=>{
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmaximum = Math.max(...dataPointsValues);



    return (
        <div className="chart">
            {props.dataPoints.map( (dataPoint) => {
                return <ChartBar
                key={dataPoint.lable}
                value={dataPoint.value}
                maxValue={totalmaximum}
                label={dataPoint.label}
                />
            })}
        </div>
    )

};





export default Chart;