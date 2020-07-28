import React, { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      greetingText: "koders!!",
    };
    this.greetingInputHandler = this.greetingInputHandler.bind(this);
  }

  greetingInputHandler(event) {
    console.log(event.target);
    let greetingText = event.target.value;
    console.log(greetingText);

    this.setState({ greetingText: greetingText });
  }

  render() {
    return (
      <div className="">
        {
            this.state.greetingText || this.state.greetingText !== "" ? 
            <h1>{this.state.greetingText}</h1>
            : null
        }
        <input
          type="text"
          name="greeting"
          onChange={this.greetingInputHandler}
        />
      </div>
    );
  }
}

export default Greeting;
