import "./Auth.css";
import { useAuth } from "../../context";
import {
  validateEmail,
  validateNumber,
  validateName,
  validatePassword,
} from "../../utils";
import { signupHandler } from "../../services";

let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;

export const AuthSignup = () => {
  const { username, email, password, confirmPassword, number, authDispatch } =
    useAuth();

  console.log({ username, email, password, confirmPassword, number });

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (!isNumberValid) {
      // event.target.setCustomValidity("Invalid Number");
      console.log("Invalid Number");
    } else {
      console.log("valid number", event.target.value);

      authDispatch({ type: "NUMBER", payload: event.target.value });
    }
  };
  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (!isNameValid) {
      // event.target.setCustomValidity("Invalid Name");
      console.log("Invalid Name");
    } else {
      console.log("valid name", event.target.value);
      authDispatch({ type: "NAME", payload: event.target.value });
    }
  };
  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (!isEmailValid) {
      // event.target.setCustomValidity("Invalid Email");
      console.log("Invalid Email");
    } else {
      console.log("valid email", event.target.value);
      authDispatch({ type: "EMAIL", payload: event.target.value });
    }
  };
  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (!isPasswordValid) {
      // event.target.setCustomValidity("Invalid Password");
      console.log("Invalid Password");
    } else {
      console.log("valid password", event.target.value);
      authDispatch({ type: "PASSWORD", payload: event.target.value });
    }
  };
  const handleConfirmPasswordChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (!isConfirmPasswordValid) {
      console.log("Invalid Password");
      // event.target.setCustomValidity("Invalid Password");
    } else if (event.target.value !== password) {
      console.log("Passwords do not match");
      // event.target.setCustomValidity("Passwords do not match");
    } else {
      console.log("valid confirm password", event.target.value);
      authDispatch({ type: "CONFIRM_PASSWORD", payload: event.target.value });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log(
      isNumberValid,
      isNameValid,
      isEmailValid,
      isPasswordValid,
      isConfirmPasswordValid,
      password,
      confirmPassword
    );
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      password === confirmPassword
    ) {
      signupHandler(username, number, email, password);
    } else {
      console.log("Invalid form data");
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SET_TO_LOGIN",
    });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={number}
            className="auth-input"
            placeholder="Enter Mobile Number"
            required
            maxLength="10"
            type="number"
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Username <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            required
            type="email"
            onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            required
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            required
            type="password"
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
