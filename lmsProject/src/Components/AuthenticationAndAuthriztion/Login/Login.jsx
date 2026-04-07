import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginin, setLoginIn] = useState();
  const naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const userDetails = {
  //   email: "john@mail.com",
  //   password: "changeme",
  // };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",

        {
          email,
          password,
        },
      );

      setLoginIn(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      naviagte("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Box className="loginform">
        <label htmlFor="">UserName: </label>
        <input
          type="text"
          placeholder="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </Box>
    </>
  );
}
