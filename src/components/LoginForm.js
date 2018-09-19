import React from 'react'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername = event => {
    const typedUsername = event.target.value
    this.setState({
      username: typedUsername
    })
    console.log(this.state.username)
  }

  handlePassword = event => {
    const typedPassword = event.target.value
    this.setState({
      password: typedPassword
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }


  render () {
    return (
      <form onSubmit={this.state.username.length > 0 && this.state.password.length >0 ? this.handleSubmit : (event) => event.preventDefault()}>
        <div>
          <label>
            Username
            <input id='username'
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id='password'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handlePassword}/>
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
