import React from "react";
import {AdminCharts} from "../../AdminCharts";
import {Friedman} from "../Statistics/Friedman";
import {LeastSquares} from "../Statistics/LeastSquares";
import {MannUitney} from "../Statistics/MannUitney";

export const AdminResultBlock = ({dateArray, results, checked, ctrlResults, expResults, name, trendName, note}) => {
  return (<>
    <AdminCharts date={dateArray}
                 results={results}
                 name={name}
    />
    {note}
    {!checked && <Friedman results={results}/>}
    <LeastSquares
      date={dateArray}
      name={trendName}
      results={results}/>
    <MannUitney date={dateArray}
                ctrlResults={ctrlResults}
                expResults={expResults}
    />
  </>)
};