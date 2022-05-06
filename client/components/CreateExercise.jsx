import React from 'react';
import { useState } from 'react';

export default function CreateExercise() {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState('');

  // const handleChange = (event) => {
  //   setEmail(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://localhost:5000/exercises/addexercise';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: exerciseName, exerciseType: exerciseType,duration: exerciseDuration }),
    };
    fetch(url, requestOptions)
      .then((response) => {response.json()
      console.log(response)})
      .catch((error) => console.log('Form submit error', error));
    alert(`Your state values: \n 
            ${exerciseName}, ${exerciseType}, ${exerciseDuration} \n `);
  };
  return (
    <main>
      <form onSubmit={handleSubmit} class='container-fluid align-items-center'>
        <div class='form-group'>
          <label for='addExercise'>Add Exercise</label>
          <input
            onChange={e => setExerciseName(e.target.value)}
            value={exerciseName}
            type='text'
            class='form-control'
            id='addExercise'
            aria-describedby='exerciseInput'
            placeholder='Enter Exercise'
          />
        </div>
        <div class='form-group'>
          <label for='exerciseType'>Exercise Type</label>
          <input
            onChange={e => setExerciseType(e.target.value)}
            value={exerciseType}
            type='text'
            name='exercise-type'
            class='form-control'
            id='exerciseType'
            placeholder='Enter Exercise'
          />
        </div>
        <div class='form-group'>
          <label for='exerciseDuration'>Duration</label>
          <input
            onChange={e => setExerciseDuration(e.target.value)}
            value={exerciseDuration}
            name='duration'
            type='text'
            class='form-control'
            id='exerciseDuration'
            placeholder='Enter Duration'
          />
        </div>
        <button type='submit' class='btn btn-primary mt-2'>
          Submit
        </button>
      </form>
    </main>
  );
}
