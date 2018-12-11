import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import md5 from "md5";
<<<<<<< HEAD:app-client/src/components/Login.js
import { AuthenticationContext } from "../AuthenticationContext";
import * as cookies from "js-cookie";
=======
import { AuthenticationContext } from "../../Contexts/AuthenticationContext/AuthenticationContext";
>>>>>>> 5e67a38bd0756d6963d6dbda0b08b96631a41c52:app-client/src/Components/Login/Login.js
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD:app-client/src/components/Login.js
      email: '',
      password: '',
=======
      email: ``,
      password: ``
>>>>>>> 5e67a38bd0756d6963d6dbda0b08b96631a41c52:app-client/src/Components/Login/Login.js
    };
  }

  // might need to have more validation here but it's a start
  validateForm = () => {
    return this.state.email.length > 6 && this.state.password.length > 6;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: md5(this.state.password)
    };

    const request = {
      method: 'POST',
      mode: 'cors',
      headers: {
<<<<<<< HEAD:app-client/src/components/Login.js
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    };

    fetch('http://localhost:3001/api/login', request)
    .then(response => {
      switch (response.status) {
        case 401:
          alert('Incorrect Credentials');
          break;
        case 404:
          alert(`User Does Not Exist`);
          break;
        case 200:      
          const token = cookies.get("X-RE-TOKEN");
          console.log(token);
          this.context.login();
          break;
        default:
          alert(`Unkown Error ${response.status}`);
          break;
        }
    });
=======
        'accept': `application/json`,
        'content-type': `application/json`
      },
      body: JSON.stringify(data)
    };

    let response = await fetch(`/api/login`, config);

    /* eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
    switch (response.status) {
      case 401:
        alert(`Incorrect Credentials`);
        break;
      case 404:
        alert(`User Does Not Exist`);
        break;
      case 200:
        alert(`Successfully Authenticated`);
        this.context.login();
        break;
      default:
        alert(`Unknown Error ${response.status}`);
        break;
    }
>>>>>>> 5e67a38bd0756d6963d6dbda0b08b96631a41c52:app-client/src/Components/Login/Login.js
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

Login.contextType = AuthenticationContext;