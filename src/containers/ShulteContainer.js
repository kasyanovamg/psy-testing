import { connect } from 'react-redux';
import Shulte from '../components/Shulte';
import { startTraining } from '../actions/actionCreatorsStartButton';
import { getShulteError, checkShulteEnd, checkTime, shulteErrorCounter } from '../actions/actionCreatorsShulte';

const mapStateToProps = (state) => {
    return {
        start: state.start,
        shulteError: state.shulteError,
        shulteEnd: state.shulteEnd,
        time: state.checkTime,
        error: state.shulteErrors,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTraining: (status) => dispatch(startTraining(status)),
        getShulteError: (bool) => dispatch(getShulteError(bool)),
        checkShulteEnd: (bool) => dispatch(checkShulteEnd(bool)),
        checkTime: (time) => dispatch(checkTime(time)),
        shulteErrorCounter: (error) => dispatch(shulteErrorCounter(error)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shulte);

