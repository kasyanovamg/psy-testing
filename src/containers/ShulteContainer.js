import { connect } from 'react-redux';
import Shulte from '../components/Shulte';
import { startTraining } from '../actions/actionCreatorsStartButton';

const mapStateToProps = (state) => {
    return {
        start: state.start,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTraining: (status) => dispatch(startTraining(status))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shulte);

