import React from "react";
import 'raf/polyfill';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: '',
                  password: ''};

  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit(this.state)
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" 
            onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" 
            onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
