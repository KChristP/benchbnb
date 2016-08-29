import React from 'react';

class BenchIndexItem extends React.Component {

  render(){
    return (
      <div>
        <li>{this.props.bench.description}</li>
        <p>{this.props.bench.lat}</p>
        <p>{this.props.bench.long}</p>
      </div>
    );
  }
}

export default BenchIndexItem;
