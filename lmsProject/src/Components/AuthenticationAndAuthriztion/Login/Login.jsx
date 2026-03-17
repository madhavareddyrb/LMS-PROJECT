import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginin, setLoginIn] = useState();
  const naviagte = useNavigate()

  const userDetails = {
    email: "john@mail.com",
    password: "changeme",
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        userDetails,
      );

      setLoginIn(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      naviagte("/profile")
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Box className="loginform">
        <label htmlFor="">UserName</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button onClick={handleLogin}>Login</button>
      </Box>
    </>
  );
}
