import React, { Component } from 'react';
import Footer from './Footer';
import CreateExercise from './CreateExercise';

export default class ExerciseLog extends Component {
  constructor(props) {
    super(props)
    this.state = []
  }


  render() {
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
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>  
            </tbody>
          </table>
        </main>
        <Footer />
      </div>
    );
  }
}
