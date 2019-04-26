import React, { Component } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signup = () => {
    const { username, password } = this.state;
    axios.post("/api/auth/signup", { username, password }).then(response => {});
  };

  login = () => {
    const { username, password } = this.state;
    axios.post("/api/auth/login", { username, password }).then(response => {
      if (response.data.username) {
        this.setState({
          loggedIn: true
        });
      }
    });
  };

  render() {
    return (
      <nav className={styles.navCont}>
        <div>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          {this.state.loggedIn ? (
            <>
              <Link to="/seller" className={styles.link}>
                Seller
              </Link>
              <Link to="/checkout" className={styles.link}>
                Checkout
              </Link>
            </>
          ) : null}
        </div>
        <div>
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <button onClick={this.signup}>Signup</button>
          <button onClick={this.login}>Login</button>
        </div>
      </nav>
    );
  }
}
