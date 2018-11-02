import React from 'react';

const Instructions = ({ message = '', startTraining = () => { } }) => {
    return (
        <div className='message'>
            <span className='start-message'>{message}</span>
            <button className='start-btn' onClick={() => startTraining(true)}>Начать</button>
        </div>
    )
}

export default Instructions;