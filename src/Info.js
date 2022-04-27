import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  buttonPressed() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
        <button onClick={() => this.buttonPressed()}>Click Me</button>
      </div>
    );
  }
}

export default Info;

// export function Info() {

//     return (
//         <div>
//             <h1>{showTitle ? title : ""}</h1>
//             <p>Manage your stuff</p>
//         </div>
//     );
// }
