import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username)
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state.password)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.state.username.length > 0 && this.state.password.length > 0 ? this.handleSubmit : (e)=> e.preventDefault()}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
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
