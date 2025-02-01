import { useState } from "react";
import Cookies from "universal-cookie";
import { FormControl, FormHelperText, Input, InputLabel, Button, Box } from "@mui/material";

const cookies = new Cookies();

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    // Save username and password in a cookie
    cookies.set("user", email, { path: "/" });
    alert("Login details saved to cookies!");
    window.location.href = "./";
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-helper-text"
        />
        <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input
          id="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="password-helper-text"
        />
        <FormHelperText id="password-helper-text">Your password is safe with us.</FormHelperText>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: "16px" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginScreen;