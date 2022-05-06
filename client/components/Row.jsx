import React, { Component } from 'react'
import ExerciseLog from './ExerciseLog'

export default class Row extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <tr>
        <th scope='row'>1</th>
        <td>Weight Lifting</td>
        <td>Strength</td>
        <td>90 minutes</td>
      </tr>
    )
  }
}
