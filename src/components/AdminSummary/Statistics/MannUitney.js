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
 // console.log(ctrlObj, expObj)
 // console.log([ctrlObj[1], expObj[1]])
  let message = '';
  if (ctrlObj[1] && expObj[1]) {
    const samples = [expObj[1], ctrlObj[1]];
    const u = mwu.test(samples);
    if (mwu.significant(u, samples)) {
      message = 'The data is significant!';
    } else {
      message = 'The data is not significant.';
    }
  }

  return <div>MannUitney: {message}</div>
};