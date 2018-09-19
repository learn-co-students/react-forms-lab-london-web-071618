import React from 'react'

class TwitterMessage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputValue: '',
      remainingChars: this.props.maxChars
    }
  }

  handleChange = event => {
    const typedText = event.target.value
    this.setState({
      inputValue: typedText,
      remainingChars: this.props.maxChars - typedText.length
    })
  }

  render () {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value ={this.state.inputValue} type='text' />
        <p> Characters Remaining: {this.state.remainingChars} </p>
      </div>
    )
  }
}

export default TwitterMessage
