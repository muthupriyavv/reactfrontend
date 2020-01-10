import React, { Component } from 'react';
import './RegisterPage.css';
import { register } from '../../services/Userfunction';

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      emailId: '',
      userId: '',
      password: '',
      contactNo: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      emailId: this.state.emailId,
      userId: this.state.userId,
      password: this.state.password,
      contactNo: this.state.contactNo

    }

    register(newUser).then(res => {
        console.log(res)
      if (res) {
        console.log("registered", res)
        this.props.history.push(`/login`)
      }
    })

  }
  render() {
    return (
      <div className="Register">
        <form onSubmit={this.onSubmit}>
          <p>Enter Username:</p>
          <input type='text' name='username' onChange={this.onChange} />

          <p>Enter EmailId:</p>
          <input type='email' name='emailId' onChange={this.onChange} />

          <p>Enter UserId:</p>
          <input type='text' name='userId' onChange={this.onChange} />

          <p>Enter Password:</p>
          <input type='password' name='password' onChange={this.onChange} />

          <p>Contact No:</p>
          <input type='text' name='contactNo' onChange={this.onChange} />

          <input type="submit" value="submit" name="submit" />

        </form>
      </div>
    );
  }
}

export default RegisterPage;
