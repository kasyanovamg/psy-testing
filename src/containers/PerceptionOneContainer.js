import { connect } from 'react-redux';
import PerceptionOne from '../components/PerceptionOne';
import { startTraining } from '../actions/actionCreatorsStartButton';
import { perceptionErrorCounter, perceptionEnd } from '../actions/actionCreatorsPerceptionOne';
import { checkTime } from '../actions/actionCreatorsShulte';

const mapStateToProps = (state) => {
    return {
        start: state.start,
        perseptionError: state.perseptionErrors,
        perceptionEnd: state.perceptionEnd,
        time: state.checkTime,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTraining: (status) => dispatch(startTraining(status)),
        perceptionErrorCounter: (error) => dispatch(perceptionErrorCounter(error)),
        perceptionEnd: (bool) => dispatch(perceptionEnd(bool)),
        checkTime: (time) => dispatch(checkTime(time)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerceptionOne);