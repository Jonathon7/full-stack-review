import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      loggedIn: true
    };
  }

  componentDidMount() {
    this.checkForUser();
  }

  checkForUser = () => {
    axios
      .get("/api/auth/session")
      .then(response => {
        if (!response.data) {
          this.setState({
            loggedIn: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.loggedIn ? null : <Redirect to="/" />}
        <h1>Checkout</h1>
      </div>
    );
  }
}
