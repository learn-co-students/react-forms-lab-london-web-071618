import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  // remainingChars = () => {
  //    return this.props.maxChars - this.state.message.length
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          />
        <h3>{this.props.maxChars - this.state.message.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
