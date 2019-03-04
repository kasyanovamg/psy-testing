import React, { Component } from 'react';
import { connect } from 'react-redux';

class Information extends Component {
    componentDidUpdate(prevProps) {
        return prevProps.time !== this.props.time || prevProps.errors !== this.props.errors;
    }
    render() {
        const {end, errors, error, errorMessage, instructionNote, time} = this.props;
        return (
            <div className='info'>
                {
                    end ? <p>Тестирование завершено! Ваше время: {time} сек. Количество ошибок: {errors}.</p> :
                        error ? <p className='info__error'>{errorMessage}</p> :
                            <p>{instructionNote}</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.current.setTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)