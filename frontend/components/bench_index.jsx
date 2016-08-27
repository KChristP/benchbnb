import React from 'react';
// import {requestBenches} from '../actions/bench_actions';


class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.requestBenches();
  }
  render(){
    let benchList;
    if (this.props.benches.keys !== undefined){
      console.log(Object.keys(this.props.benches))
      benchList = Object.keys(this.props.benches).map((key) => (
      <div>
        <li>{this.props.benches[parseInt(key)].description}</li>
        <p>{this.props.benches[parseInt(key)].lat}</p>
        <p>{this.props.benches[parseInt(key)].long}</p>
      </div>
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
