import React, { Component } from 'react'
import Footer from './Footer'

export default class CreateUser extends Component {
  render() {
    return (
      <div>
      <main>
      <form class='container-fluid align-items-center'>
        <div class='form-group'>
          <label for='name'>Name</label>
          <input
            type='text'
            class='form-control'
            id='name'
            aria-describedby='name'
            placeholder='Enter name'
          />
        </div>
        <div class='form-group'>
          <label for='newUserEmail'>Email address</label>
          <input
            type='email'
            class='form-control'
            id='newUserEmail'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
        </div>
        <div class='form-group'>
          <label for='password'>Password</label>
          <input
            type='password'
            class='form-control'
            id='newUserPassword'
            aria-describedby='passwordField'
            placeholder='Password'
          />
        </div>
        
        <button type='submit' class='btn btn-primary mt-2'>
          Submit
        </button>
      </form>
    </main>
    <Footer />
    </div>
    )
  }
}
