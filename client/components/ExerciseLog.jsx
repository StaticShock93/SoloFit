import React, { Component } from 'react';
import Footer from './Footer';
import CreateExercise from './CreateExercise';
import Row from './Row';

export default class ExerciseLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasError: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/exercises')
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        this.setState({
          urls: data,
          loading: true,
        });
      });
    // .catch((err) => {
    //   this.setState({ hasError: true });
    // });
  }
  render() {
    const row = [];
    for (let i = 0; i < this.state.data.length; i++) {
      console.log('check check', this.state.data[1]);
      row.push(
        <Row
          key={i}
          attribute1={this.state.data.username}
          attribute2={this.state.data.exerciseType}
          attribute3={this.state.data.duration}
        />
      );
    }
    return (
      // create and append table rows with a loop starting from index 1
      <div>
        <main>
          <table class='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Total</th>
                <th scope='col'>Exercise Name</th>
                <th scope='col'>Exercise Type (Cardio/Strength)</th>
                <th scope='col'>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Weight Lifting</td>
                <td>Strength</td>
                <td>90 minutes</td>
              </tr>
            </tbody>
          </table>
        </main>
        <Footer />
      </div>
    );
  }
}
