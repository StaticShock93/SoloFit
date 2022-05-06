import React, { Component } from 'react'
import Footer from './Footer'
export default class UserLogin extends Component {
  render() {
    return (
      <main>
        <div>
      <form class='container-fluid align-items-center'>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            class='form-control'
            id='loginEmail'
            aria-describedby='loginEmail'
            placeholder='Enter email'
          />
        </div>
        <div class='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            class='form-control'
            id='loginPassword'
            placeholder='Password'
          />
        </div>
        <button type='submit' class='btn btn-primary mt-2'>
          Submit
        </button>
      </form>
      </div>
      <Footer />
    </main>
    )
  }
}
