import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      seating: 0,
      lat: 0,
      long: 0,
    };
  }

    // super(props)
    // this.state = {};
    // this.lat = lat;
    // this.lng = lng;

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(){
    return e => {
      e.preventDefault();
      const bench = Object.assign({}, this.state);
    };
  }

  render(){
    return (
        <form className="bench-form" onSubmit={this.handleSubmit()}>
          <p>Description
            <input
              type="text"
              name="bench[desctiption]"
              value={this.state.description}/>
          </p>
          <p>Number of Seats
            <input
              type="text"
              name="bench[seating]"
              value={this.state.seating}/>
          </p>
          <p>Latitude
            <input
              type="text"
              name="bench[lat]"
              value={this.state.lat} />
          </p>
          <p>
            Longitude<input type="text" name="bench[long]" />
          </p>
        </form>
    );
  }
}

export default BenchForm;
