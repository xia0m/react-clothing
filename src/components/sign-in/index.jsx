import React, { Component } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

import { SignInContainer, ButtonContainer } from "./sign-in.style";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {""}Sign in with Google{""}
            </CustomButton>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
