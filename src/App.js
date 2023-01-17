import "./App.css";
import FormInput from "./components/FormInput/FormInput";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
      button: "",
    };
  }

  render() {
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        errormessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errormessage: "It should be a valid email address!",
        required: true,
      },
      {
        id: 3,
        name: "birthday",
        type: "date",
        placeholder: "Birthday",
        label: "Birthday",
      },
      {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        pattern:
          "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
        errormessage:
          "Password should be 8-20 characters and include at least one uppercase letter, one lowercase letter, one number and one special character!",
        required: true,
      },
      {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
        errormessage: "Passwords don't match!",
        pattern: this.state.password,
        required: true,
      },
    ];

    const handleSubmit = (e) => {
      this.setState({
        button: "true",
      });
    };

    return (
      <div className="App">
        <form id="form" onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={this.state[input.name]}
              onChange={onChange}
            />
          ))}
          <button succes={this.state.button}>Submit</button>
        </form>
      </div>
    );
  }
}
