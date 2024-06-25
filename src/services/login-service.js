import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: {
        user: { accessToken: accessToken, username },
        // user: { accessToken: username },
      },
    } = await axios.post("http://localhost:3500/api/auth/login", {
      number: number,
      password: password,
    });
    console.log({ accessToken, username });
    console.log("logged in");
    return { accessToken, username };
  } catch (err) {
    console.log(err);
  }
};
