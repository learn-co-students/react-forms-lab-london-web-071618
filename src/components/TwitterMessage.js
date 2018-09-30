import React from 'react';

class TwitterMessage extends React.Component {
  state = {
    message: ''
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render () {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmit(event)} >
          <input type='text'
            message={this.state.value}
            onChange ={this.handleChange}
          />
      </form>
      </div>
     
    )
  }
}

export default TwitterMessage
