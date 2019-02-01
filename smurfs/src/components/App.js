import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addSmurf = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS DATABASE</h1>
        <form onSubmit={this.addSmurf}>
          <input value={this.state.name} onChange={this.handleChanges} name="name"/>
          <input value={this.state.age} onChange={this.handleChanges} name="age" />
          <input value={this.state.height} onChange={this.handleChanges} name="height" />
          <button>Add Smurf</button>
        </form>
          {this.props.smurfs.map( (smurf, index) => (
            <div key={index}>
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
