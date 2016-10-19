import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MedalTable} from './MedalTable';
import {Error} from './Error';
import * as medalCountActions from '../actions/medal-count-actions';

class MedalCountContainer extends Component {
  propTypes: {
    actions: PropTypes.object.isRequired,
    error: PropTypes.object,
    loaded: PropTypes.bool.isRequired,
    medalCount: PropTypes.array.isRequired,
    sortProp: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.actions.fetchMedalCount();
  }

  render() {
    const {actions, error, loaded, medalCount, sortProp} = this.props;
    return (
      <div>
        <h2 className="MedalCount-header">Medal Count</h2>
        {loaded && !error &&
          <MedalTable medalCount={medalCount}
                      numMedals={10}
                      sortBy={actions.sortMedalsByProp}
                      sortProp={sortProp} />
        }
        {error ? <Error msg={String(error)} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    error: state.medals.error,
    loaded: state.medals.loaded,
    medalCount: state.medals.medalCount,
    sortProp: state.medals.sortProp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(medalCountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MedalCountContainer);
