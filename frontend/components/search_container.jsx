import {connect} from 'react-redux';
import {requestBenches} from '../actions/bench_actions';
import Search from './search';
// import BenchIndex from './bench_index';
// import React from 'react';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
