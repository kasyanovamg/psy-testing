import React from 'react';
import {normalize, schema} from 'normalizr';
import get from 'lodash-es/get';
import {Line} from 'react-chartjs-2';

//нам приходит массив, но удобнее работать с объектом, поэтому нормализуем
function getNormalizedContent(contentSettingsMapping) {
  const data = contentSettingsMapping;
  const element = new schema.Entity('elements', {}, {idAttribute: 'id'});
  const normalizedData = normalize(data, [element]);
  return get(normalizedData, 'entities.elements', {});
}

function random_rgba() {
  const o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
function getColor(){
  return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' +
    (50 + 10 * Math.random()) + '%)'
}
export function AdminCharts({date, results, name = ''}) {
//normalize to make id the key and array with {result, attempt} or array of result for each user
  // const res = results.map()
  const newObj = {};
  results.forEach(r => {
    return newObj[r.id] ? newObj[r.id] = newObj[r.id].concat(r.result) : newObj[r.id] = [r.result];
  });

  const dataset = Object.keys(newObj).map(obj => {
    const color = getColor();
    return {
    label: obj,
    fill: false,
    lineTension: 0.1,
    backgroundColor: color,
    borderColor: color,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: color,
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: color,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: newObj[obj]
  }});

  const data = {
    labels: date,
    datasets: dataset,
  };

  return (
    <div>
      <h2>{name}</h2>
      <Line data={data} />
    </div>
  );
}
