import React, { useState } from "react";
import { connect } from "react-redux";
import FormControl from "../../../BOOTSTRAP/COMPONENTS/FORMS/FORMGROUP";
import { Buttons } from "../../../BOOTSTRAP/COMPONENTS/BUTTONS";
import { authentification, createUser } from "../../../FIREBASE";
import { GetErrorMessage } from "../../../REDUX/ACTIONS/USERACTION";

function SignOut({ SetErrorMessage }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  const handleSubmitNewUser = async (e) => {
    e.preventDefault();
    if (password.length >= 9) {
      if (password === repeatPassword) {
        try {
          let { user } = await authentification.createUserWithEmailAndPassword(
            email,
            password
          );
          await createUser(user, { displayName });
          setEmail("");
          setDisplayName("");
          setPassword("");
          setRepeatPassword("");
        } catch (error) {
          SetErrorMessage(error.message);
        }
      } else {
        setPasswordError("The password doesn't match. Please try again.");
      }
    }else{
      setPasswordError("The password's length have to be more than 8");
    }
  };

  return (
    <form onSubmit={handleSubmitNewUser}>
      <FormControl
        type="text"
        placeholder="Fullname..."
        label="Fullname"
        value={displayName}
        controlId="validationCustom01"
        required
        textInValidated=""
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <FormControl
        type="email"
        placeholder="example: email@email.com"
        label="Email address"
        value={email}
        controlId="validationCustom02"
        required
        textInValidated=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl
        type="password"
        placeholder="Password..."
        label="Password"
        controlId="validationCustom03"
        required
        value={password}
        textInValidated=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControl
        type="password"
        placeholder="Repeat password..."
        label="Verify password"
        controlId="validationCustom04"
        required
        value={repeatPassword}
        textInValidated={PasswordError}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <div className="m-auto w-50 pt-3 text-center">
        <Buttons className="w-75" type="submit">
          Log out
        </Buttons>
      </div>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetErrorMessage: (message) => {
      dispatch(GetErrorMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
