import React from 'react';
import lsq from "least-squares";
import {Line} from "react-chartjs-2";

export const LeastSquares = ({date, results, name}) => {
  const X = results.map(res => res.attempt);
  const Y = results.map(res => res.result || 0);
  const ret = {};
  lsq(X, Y, ret);
  const trend = date.map((d) => ret.m * d + ret.b);

  const newObj = {};
  results.forEach(r => {
    return newObj[r.id] ? newObj[r.id] = newObj[r.id].concat(r.result) : newObj[r.id] = [r.result];
  });

  const dataset = Object.keys(newObj).map(obj => {
    return {
      label: obj,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
      pointHoverBorderColor: 'rgba(220,220,220,0.2)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: newObj[obj]
    }});

  const trendDataSet = [{
      label: 'trend',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(205,24,72,0.4)',
      borderColor: 'rgba(205,24,72,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(205,24,72,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(205,24,72,1)',
      pointHoverBorderColor: 'rgba(205,24,72,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: trend
  }];

  const data = {
    labels: date,
    datasets: trendDataSet.concat(dataset),
  };

  return (
    <div>
      <h2>{name}</h2>
      <Line data={data} />
    </div>
  );
};