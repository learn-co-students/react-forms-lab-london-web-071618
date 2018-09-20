import React from 'react'

class LoginForm extends React.Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUserName = (event) => {
    this.setState({ username: event.target.value })
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  render () {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          if (this.state.username === '' && this.state.password === '');
          else if (this.state.username === '' || this.state.password === '');
          else { this.props.onSubmit(this.state) }
        }}>
        <div>
          <label>
            Username
            <input
              id='username'
              name='username'
              type='text'
              onChange={(event) => this.onChangeUserName(event)}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id='password'
              name='password'
              type='password'
              onChange={(event) => this.onChangePassword(event)}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
