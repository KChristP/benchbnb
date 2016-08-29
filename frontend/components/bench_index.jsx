import React from 'react';
import BenchIndexItem from './bench_index_item';
// import {requestBenches} from '../actions/bench_actions';


class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.requestBenches();
  }
  render(){
    let benchList = [];
    if (this.props.benches.keys !== undefined){
      Object.keys(this.props.benches).forEach((key) => (
        benchList.push(
          <BenchIndexItem bench={this.props.benches[parseInt(key)]} key={key} />
        )
      ));
    }
    return(
      <ul>
        {benchList}
      </ul>
    );
  }
}

export default BenchIndex;


// AIzaSyAAuOB0rHBLwqQ-CbmRyLq-ZBxX4cyzti4
