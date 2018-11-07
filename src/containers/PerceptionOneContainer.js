import { connect } from 'react-redux';
import PerceptionOne from '../components/PerceptionOne';
import { startTraining } from '../actions/actionCreatorsStartButton';
import { perceptionErrorCounter, checkPerceptionEnd, getPerceptionError } from '../actions/actionCreatorsPerceptionOne';
import { checkTime } from '../actions/actionCreatorsShulte';

const mapStateToProps = (state) => {
    return {
        start: state.start,
        perseptionError: state.perceptionErrors,
        errorCheck: state.perceptionError,
        perceptionEnd: state.perceptionEnd,
        time: state.checkTime,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTraining: (status) => dispatch(startTraining(status)),
        perceptionErrorCounter: (error) => dispatch(perceptionErrorCounter(error)),
        checkPerceptionEnd: (bool) => dispatch(checkPerceptionEnd(bool)),
        checkTime: (time) => dispatch(checkTime(time)),
        getPerceptionError: (bool) => dispatch(getPerceptionError(bool)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerceptionOne);