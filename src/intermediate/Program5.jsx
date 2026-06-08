import React, { Component } from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";
import UserProfile from "./UserProfile";

const Program5 = ({ onBack }) => {
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Program5</h3>
      </span>
      <div className="programs-body">
        {/* <MyComponent /> */}
        <UserProfile />
      </div>
    </div>
  );
};
export default Program5;

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   componentDidMount() {
//     console.log("Mounted.");
//   }
//   componentDidUpdate() {
//     console.log("Updated.");
//   }
//   componentWillUnmount() {
//     console.log("WillUnmount.");
//   }
//   componentDidCatch(error, info) {
//     console.log(`Error : ${error} | Info : ${info}`);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick} className="button">
//           Increment
//         </button>
//         <p>Count : {this.state.count}</p>
//       </div>
//     );
//   }
// }
