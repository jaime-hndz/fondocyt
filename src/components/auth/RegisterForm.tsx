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
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock, Person } from "@mui/icons-material";

const cookies = new Cookies();

export const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
  
    const validatePassword = (password:string) => {
      const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return strongRegex.test(password);
    };
  
    const handleRegister = () => {
      if (!validatePassword(password)) {
        setError("La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula, un número y un símbolo.");
        return;
      }
  
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }
  
      cookies.set("user", { name, email }, { path: "/" });
      alert("¡Registro exitoso! Usuario guardado en cookies.");
      window.location.href = "/login";
    };
  
    return (
        <Box className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col gap-10">
          <Typography variant="h5" className="text-center font-bold mb-6">
            Crear Cuenta
          </Typography>
  
          {error && <Alert severity="error" className="mb-4">{error}</Alert>}
  
          {/* Nombre */}
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name-input">Nombre Completo</InputLabel>
            <Input
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
          </FormControl>
  
          {/* Correo */}
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
  
          {/* Contraseña */}
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
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
  
          {/* Confirmar Contraseña */}
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="confirm-password-input">Repetir Contraseña</InputLabel>
            <Input
              id="confirm-password-input"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                    {!showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
  
          {/* Botón de registro */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegister}
            fullWidth
            className="mt-4"
          >
            Registrarse
          </Button>
  
          {/* Enlace a iniciar sesión */}
          <Typography className="mt-4 text-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Inicia sesión aquí
            </Link>
          </Typography>
        </Box>
    );
}
