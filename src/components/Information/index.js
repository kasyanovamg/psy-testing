import React from 'react';

const Information = ({ error = false, end = false, time = 0 }) => {
    return (
        <div className='info'>
            {
                end ? <p>Тестирование завершено! Ваше время: {time} сек.</p> :
                    error ? <p>Не верное число!</p> :
                        <p>Найдите числа!</p>
            }
        </div>
    )
}

export default Information;