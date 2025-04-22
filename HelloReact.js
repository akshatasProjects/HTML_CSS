"use strict";

class HelloReact extends HelloReact.Component {
  constructor(props) {
    super(props);
    this.state = { personName: "World" };
  }

  render() {
    return HelloReact.createElement(
      "h1",
      null,
      "Hello, " + this.state.personName
    );
  }
}
const domContainer = document.querySelector("#app");
ReactDOM.render(React.createElement(HelloReact), domContainer);
