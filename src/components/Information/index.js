import React from 'react';

const Information = ({ error = false, end = false }) => {
    return (
        <div className='info'>
            {
                end ? <p>Тестирование завершено!</p> :
                    error ? <p>Не верное число!</p> :
                        <p>Найдите числа!</p>
            }
        </div>
    )
}

export default Information;