import {connect} from 'react-redux';
import BenchForm from './bench_form';

const mapStateToProps = (state, ownProps) => ({
  lat: ownProps.location.query.lat,
  lng: ownProps.location.query.lng
});

const mapDispatchToProps = dispatch => ({
  // postBench: () => dispatch(createBench)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(BenchForm);
