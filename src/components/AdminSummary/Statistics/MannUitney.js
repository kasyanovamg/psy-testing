import React, {useMemo} from 'react';
import mwu from 'mann-whitney-utest'


export const MannUitney = ({date, ctrlResults, expResults}) => {
  const ctrlObj = {};
  date.forEach(d => ctrlResults.forEach(res => {
      if (res.attempt === d) {
        ctrlObj[d] = ctrlObj[d] ? ctrlObj[d].concat(res.result) : [].concat(res.result)
      }
    })
  );

  const expObj = {};
  date.forEach(d => expResults.forEach(res => {
      if (res.attempt === d) {
        expObj[d] = expObj[d] ? expObj[d].concat(res.result) : [].concat(res.result)
      }
    })
  );

  const compare = (i) => {
    if (ctrlObj[i] && expObj[i]) {
      const samples = [expObj[i], ctrlObj[i]];
      const u = mwu.test(samples);
      if (mwu.significant(u, samples)) {
        return 'Существенные различия';
      } else {
        return 'Различия не существены';
      }
    }
  }


  return <div>
    <table>
      <thead>
      <tr>
        <th>№ тренировки</th>
        <th>Значимость различий</th>

      </tr>
      </thead>
      <tbody>
      {date && date.map(date =>
      <tr key={date}>
        <th>
          {date}
        </th>
        <td>
          {compare(date)}
        </td>

      </tr>
      )}
      </tbody>
    </table>
  </div>
};