import React, { Component } from 'react';
import { addXp } from '../actions/Xp'

class AddXpForm extends Component {
  constructor() {
    super();
    this.state = {
      xp: 0,
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.xp > 0){
        addXp(this.state.xp);
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}
          className="form-inline row justify-content-center">
          <div className="form-group">
            <label for="xp">Current Total XP</label>
            <input
            type="number"
            min="0"
            name="xp"
            className="form-control m-2 mr-sm-2"
            placeholder="20.000.000"
            onChange={this.handleChange.bind(this)} />
          </div>

          <input
          type="submit"
          value="Add"
          className="btn btn-primary m-2"/>
        </form>
      </div>
    );
  }
}

export default AddXpForm;
