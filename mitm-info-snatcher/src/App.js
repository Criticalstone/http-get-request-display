import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("message", data => {
      console.log("data: " + data)
      console.log(this.state.response)
      this.setState({ response: this.state.response.concat("" +data) })
    });
  }
  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
        <ul>
          {response.map((item, index) => (
            <li id={index}>{item}</li>
          ))}
        </ul>
        </div>
    );
  }
}
export default App;
