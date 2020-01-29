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

export function AdminCharts({date, results, name = ''}) {
//normalize to make id the key and array with {result, attempt} or array of result for each user
  // const res = results.map()
  const newObj = {};
  results.forEach(r => {
    return newObj[r.id] ? newObj[r.id] = newObj[r.id].concat(r.result) : newObj[r.id] = [r.result];
  });

  console.log('newObj', newObj);
  const r = results.map(re => re / 2);

  const data = {
    labels: date,
    datasets: [
      {
        label: name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: results
      },
      {
        label: name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(0,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: r
      },
    ]
  };

  return (
    <div>
      <h2>{name}</h2>
      <Line data={data}/>
    </div>
  );
}
