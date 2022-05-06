import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import Navbar from './Navbar';
import CreateExercise from './CreateExercise';
import ExerciseLog from './ExerciseLog';
import UserLogin from './UserLogin';
import CreateUser from './CreateUser';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<CreateExercise />} />
            <Route path='/exerciselog' element={<ExerciseLog />} />
            <Route path='/createexercise/' element={<CreateExercise />} />
            <Route path='/userlogin' element={<UserLogin />} />
            <Route path='/createuser' element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
