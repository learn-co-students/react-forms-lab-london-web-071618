import React from "react";
import TwitterMessage from './TwitterMessage'
class LoginForm extends React.Component {
  state = {
    username: '',
    password: '', 
    message: ''
  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }  

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.handleUsernameChange(event)}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={event => this.handlePassword(event)}
            />
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
