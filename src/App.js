//import React from "react";
import "./App.css";
import React, { Component, useEffect } from "react";
import { render } from "@testing-library/react";

const Searchhandler = e => {
  const UserInput = e.target.value;
};

// const Submithandler = () => {
//   fetch("https://api.github.com/user/{UserInput}");
//   then{res => res.json()}
//   then(data => {
//     console.log(data)
//   })
// };

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "John Doe",
    Followers: "25",
    Following: "50",
    reps: "15"
  };
  setData = () => {
    this.setState({
      name: "vatsal",
      Followers: "5",
      Following: "5",
      reps: "5"
    });
  };

  // useEffect((UserInput) => {
  //   fetch("https://api.github.com/user/{UserInput}")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }, []);
  render() {
    return (
      <div className="App">
        <div className="border-bottom">
          <nav className="navbar navbar-dark bg-black row">
            <div className="container">
              <a className="navbar-brand col-sm-1">Github</a>
              <input
                className="form-control mr-sm-2 col-sm-6 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={Searchhandler}
              ></input>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={Submithandler}
              >
                Search
              </button>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Compare
              </button>
            </div>
          </nav>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h2>{this.state.name}</h2>
          <img
            className="imgsize"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          ></img>
          <p>{this.state.Followers} Followers</p>
          <p>{this.state.Following} Following</p>
          <p>{this.state.reps} Repos</p>
        </div>
      </div>
    );
  }
}

export default App;
