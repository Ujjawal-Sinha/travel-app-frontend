import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../context";
import { loginHandler } from "../../services";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      console.log("Form Submitted");
      const { accessToken, username } = await loginHandler(number, password);
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USER_NAME",
        payload: username,
      });
    } else {
      console.log("Invalid Form");
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };

  const hangleTestCredentialsClick = async () => {
    const { accessToken, username } = await loginHandler(
      9876543210,
      "Testuser123#"
    );
    authDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: accessToken,
    });
    authDispatch({
      type: "SET_USER_NAME",
      payload: username,
    });
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTH_MODAL",
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
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
      </form>
      <div className="cta">
        <button
          className="button btn-outline-primary cursor-pointer"
          onClick={hangleTestCredentialsClick}
        >
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};
