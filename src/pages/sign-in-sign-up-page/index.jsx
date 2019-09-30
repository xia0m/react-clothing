import React from "react";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

import "./style.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
