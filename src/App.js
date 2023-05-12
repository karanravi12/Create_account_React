import React from 'react';
import Slider from './slider';
import './App.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // add your login logic here
  }

  render() {
    return (
      <div className="create-page">
       <div class="create-header">
        <div class="logo"></div>
        </div>
        <div className="create-container">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <h2>Create Account</h2>
            <div class="form-container">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
            </div>
            </div>
            <button type="submit">Sign Up</button>
            <p className="login-link">Already have an account? <a href="#">Log in here</a></p>
          </form>
          <div className="slider-wrapper">
            <Slider />
          </div>
        </div>
    </div>
    );
  }
}

export default LoginPage;
