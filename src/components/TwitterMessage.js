import React from 'react'

class TwitterMessage extends React.Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }
  }

  onChange = (event) => {
    const value = event.target.value
    this.setState({
      value: value
    })
  }

  render () {
    console.log(this.props.maxChars - this.state.value.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type='text'
          onChange={(event) => this.onChange(event)}
          value={this.state.value}
        />
        {this.props.maxChars - this.state.value.length}
      </div>
    )
  }
}

export default TwitterMessage
