import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }
  handleChange = (event) => {
    const currentMessage = event.target.value
    this.setState({
      message: currentMessage,
      remainingChars: this.props.maxChars - currentMessage.length
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.message}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
