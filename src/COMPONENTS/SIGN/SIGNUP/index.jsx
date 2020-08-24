import React, { useState } from "react";
import {connect} from 'react-redux'
import FormControl from "../../../BOOTSTRAP/COMPONENTS/FORMS/FORMGROUP";
import { Buttons } from "../../../BOOTSTRAP/COMPONENTS/BUTTONS";
import { LogInWithGoogle, authentification } from "../../../FIREBASE";
import { GetErrorMessage } from "../../../REDUX/ACTIONS/USERACTION";

function SignUp({SetErrorMessage}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitUser = async e => {
    e.preventDefault();
    try {
      await authentification.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
      SetErrorMessage(error.message)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitUser}>
        <FormControl
          type="email"
          placeholder="example: email@email.com"
          label="Email address"
          controlId="validationCustom05"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl
          type="password"
          placeholder="Password..."
          label="Password"
          controlId="validationCustom06"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="m-auto w-50 pt-4 btn_login text-center">
          <Buttons variant="primary" className="w-75" type="submit">
            Log in
          </Buttons>
        </div>
      </form>
      <div className="m-auto w-50 text-center login__with__google__container">
        <p className="m-4 font-italic font-weight-bolder">
          Or you can use google account
        </p>
        <Buttons variant="danger"  onClick={LogInWithGoogle} className="w-75">
          Sign with google
        </Buttons>
      </div>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    SetErrorMessage: message => {
      dispatch(GetErrorMessage(message))
    }
  }
} 


export default connect(null , mapDispatchToProps)(SignUp);