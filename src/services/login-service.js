import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: {
        user: { accessToken, username },
        // user: { accessToken: username },
      },
    } = await axios.post(
      "https://travel-app-backend-vcgp.onrender.com/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log({ accessToken, username });
    console.log("logged in");
    return { accessToken, username };
  } catch (err) {
    console.log(err);
  }
};
