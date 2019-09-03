import React from "react";

 export function Numbers({lineLength, elIndex, onChange, disabled}) {
  const firstNumber = Array(lineLength).fill().map((e, i) => Math.floor(Math.random() * (10 - 1)) + 1);
  const secondNumber = Array(lineLength).fill().map((e, i) => Math.floor(Math.random() * (10 - 1)) + 1);
  const sign = Array(lineLength).fill().map((e) => Math.round(Math.random()));
  return (
    <div key={elIndex}>
      <div>{firstNumber[elIndex]}</div>
      <div> {sign[elIndex] ? "+" : "-"} </div>
      <div>{secondNumber[elIndex]}</div>
      <input onChange={onChange} id={elIndex} disabled={disabled}/>
    </div>
  )
}