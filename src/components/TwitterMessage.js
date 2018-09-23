import React from "react";
import 'raf/polyfill';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: '',
                  counter: 140};
  }

  wordCount = (event) => {
    this.setState({
      message: event.target.value,
      counter: this.state.counter -= 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message}name="message" onChange={this.wordCount}/>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
 