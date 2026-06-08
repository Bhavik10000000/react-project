import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", age: 0 },
      draft: { name: "", age: 0 },
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate() {
    this.setState({ user: this.state.draft });
  }
  handleName = (e) => {
    this.setState({
      draft: { ...this.state.draft, name: e.target.value },
    });
  };
  handleAge = (e) => {
    this.setState({ draft: { ...this.state.draft, age: e.target.value } });
  };
  render() {
    return (
      <div>
        <div className="div-form">
          <label>Enter Name : </label>
          <br />
          <input type="text" onChange={this.handleName} />
          <br />
          <label>Enter Age : </label>
          <br />
          <input type="text" onChange={this.handleAge} />
          <br />
          <button onClick={this.handleUpdate}>Update</button>
          <br />
          <h2>User Info</h2>
          <p>Name : {this.state.user.name}</p>
          <p>Age : {this.state.user.age}</p>
        </div>
      </div>
    );
  }
}
export default UserProfile;

// import React, { Component } from "react";

// class UserProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { user: { name: "Bhavik", age: 18 } };
//     // this.handleUpdate = this.handleUpdate.bind(this);
//   }
//   handleName = (e) => {
//     this.setState({
//       user: { ...this.state.user, name: e.target.value },
//     });
//   };
//   handleAge = (e) => {
//     this.setState({
//       user: { ...this.state.user, age: e.target.value },
//     });
//   };
//   render() {
//     return (
//       <div>
//         <label>Name : </label>
//         <input
//           type="text"
//           onChange={this.handleName}
//           value={this.state.user.name}
//         />
//         <label>Age : </label>
//         <input
//           type="number"
//           onChange={this.handleAge}
//           value={this.state.user.age}
//         />
//         <button>Update Name</button>
//         <br />
//         <hr />
//         <br />
//         <p>Name : {this.state.user.name}</p>
//         <p>Age : {this.state.user.age}</p>
//       </div>
//     );
//   }
// }

// export default UserProfile;
