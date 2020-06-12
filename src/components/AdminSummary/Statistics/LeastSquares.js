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

      <div style={{
        height: '50px',
        width: '140px',
        position: 'relative',
        margin: '0 auto',
      }}>
        <span style={{
        backgroundColor: '#ce1b4a',
        width: '50px',
        height: '4px',
        position: 'absolute',
        top: '7px',
        content: "",
      }} />
      <span style={{
        position: 'absolute',
        left: '60px'
      }}>Тренд</span>
      </div>

    </div>
  );
};

export const Trends = ({date, ctrlResults, expResults}) => {
  const XctrlResults = ctrlResults.map(res => res.attempt);
  const YctrlResults = ctrlResults.map(res => res.result || 0);
  const retctrlResults = {};
  lsq(XctrlResults, YctrlResults, retctrlResults);
  const trendctrlResults = date.map((d) => retctrlResults.m * d + retctrlResults.b);

  const newObjctrlResults = {};
  ctrlResults.forEach(r => {
    return newObjctrlResults[r.id] ? newObjctrlResults[r.id] = newObjctrlResults[r.id].concat(r.result) : newObjctrlResults[r.id] = [r.result];
  });

  const XexpResults = expResults.map(res => res.attempt);
  const YexpResults = expResults.map(res => res.result || 0);
  const retexpResults = {};
  lsq(XexpResults, YexpResults, retexpResults);
  const trendexpResults = date.map((d) => retexpResults.m * d + retexpResults.b);

  const newObjexpResults = {};
  expResults.forEach(r => {
    return newObjexpResults[r.id] ? newObjexpResults[r.id] = newObjexpResults[r.id].concat(r.result) : newObjexpResults[r.id] = [r.result];
  });

  const dataset = Object.keys(newObjctrlResults).map(obj => {
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
      data: newObjctrlResults[obj]
    }});

  const datasetE = Object.keys(newObjexpResults).map(obj => {
    return {
      label: obj,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(192,152,170,0.4)',
      borderColor: 'rgba(192,152,170,0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(192,152,170,0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(192,152,170,0.4)',
      pointHoverBorderColor: 'rgba(220,220,220,0.2)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: newObjexpResults[obj]
    }});

  const trendDataSet = [{
    label: 'trendControl',
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
    data: trendctrlResults
  }];

  const trendDataSetE = [{
    label: 'trendExperimental',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(43,90,233,0.4)',
    borderColor: 'rgb(42,70,196,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(42,70,196,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(42,70,196,1)',
    pointHoverBorderColor: 'rgba(42,70,196,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: trendexpResults
  }];

  const data = {
    labels: date,
    datasets: trendDataSet.concat(trendDataSetE).concat(dataset).concat(datasetE),
  };

  return (
    <div>
      <h2>Сравнение трендов контрольной и экспериментальной групп</h2>
      <Line data={data} />

      <div style={{
        height: '50px',
        width: '640px',
        position: 'relative',
        margin: '0 auto',
      }}>
        <span style={{
          backgroundColor: '#ce1b4a',
          width: '50px',
          height: '4px',
          position: 'absolute',
          top: '7px',
          content: "",
        }} />
        <span style={{
          position: 'absolute',
          left: '60px'
        }}>Тренд контрольной группы</span>


        <span style={{
          backgroundColor: '#2a4ccf',
          width: '50px',
          height: '4px',
          position: 'absolute',
          left: '340px',
          top: '7px',
          content: "",
        }} />
        <span style={{
          position: 'absolute',
          left: '400px'
        }}>Тренд экспериментальнойгруппы</span>
      </div>


    </div>
  );
};