import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      vampire: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      vampire: event.target.value
    })
  }





  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.vampire} />
        <p>Characters left: {this.props.maxChars-this.state.vampire.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
