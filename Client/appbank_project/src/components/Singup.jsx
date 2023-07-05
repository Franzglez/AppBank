import React from "react";
import "../App.css";
import InputComponent from "./Input";
import ButtonComponent from "./Button";
import H2 from "./H2";
import Logo from "./Logo";

function Singup() {
 

  return (
    <>
    <div class="signupFrm"></div>
    <form className="form-container">
      <Logo />
      <H2 />
      <InputComponent placeholder="First Name*" />
      <InputComponent placeholder="Last Name*" />
      <InputComponent placeholder="Username*"/>
      <InputComponent placeholder="Password*"/>
      <InputComponent placeholder="Confirm Password*"/>
      <ButtonComponent>SING UP</ButtonComponent>
    </form>
    </>
  );
}

export default Singup;
