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
        return 'The data is significant!';
      } else {
        return 'The data is not significant.';
      }
    }
  }


  return <div>
    <ul>
      {date && date.map(date =>
      <li key={date}>
        {compare(date)}
      </li>
      )}
    </ul>
  </div>
};