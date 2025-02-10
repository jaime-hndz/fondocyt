import { useState } from "react";
import { Link } from "react-router";
import Cookies from "universal-cookie";
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";

const cookies = new Cookies();

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    cookies.set("user", email, { path: "/" });
    window.location.href = "./";
  };
  return (
    <Box className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col gap-10">
      <Typography variant="h5" className="text-center font-bold mb-6">
        Iniciar Sesión
      </Typography>

      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="email-input">Correo Electrónico</InputLabel>
        <Input 
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="password-input">Contraseña</InputLabel>
        <Input
          id="password-input"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Botón de login */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
        className="mt-4"
      >
        Iniciar Sesión
      </Button>

      {/* Enlace a registro */}
      <Typography className="mt-4 text-center">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Regístrate aquí
        </Link>
      </Typography>
    </Box>
  );
};
