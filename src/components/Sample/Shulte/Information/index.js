import React from 'react';

const Information = ({ error = false, end = false, time = 0, errors = 0, errorMessage='Ошибка', instructionNote='' }) => {
    return (
        <div className='info'>
            {
                end ? <p>Тестирование завершено! Ваше время: {time} сек. Вы сделали {errors} ошибок.</p> :
                    error ? <p className='info__error'>{errorMessage}</p> :
                        <p>{instructionNote}</p>
            }
        </div>
    )
}

export default Information;