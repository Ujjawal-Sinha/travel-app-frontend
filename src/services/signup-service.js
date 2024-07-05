import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    const data = await axios.post(
      "https://travel-app-backend-vcgp.onrender.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log("signed up");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
