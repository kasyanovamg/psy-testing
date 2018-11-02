import React from 'react';
import './styles.css'

const Table = () => {
    let numbers = Array(25).fill().map((e, i) => i + 1);

    return (
        <div className='table'>
            {numbers.sort(() => Math.random() - 0.5).map((e) => <div key={e + 1} className='cell'>{e + 1}</div>)}
        </div>
    )
}

export default Table;