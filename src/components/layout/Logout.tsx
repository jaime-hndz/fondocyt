import { ExitToApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Logout = () => {
  const handleLogout = () => {
    // Remove username and password from cookies
    cookies.remove("user", { path: "/" });
    window.location.href = "./";
  };
  return (
    <div className="m-auto">
      <Button
        color="error"
        variant="contained"
        onClick={handleLogout}
        endIcon={<ExitToApp />}
      >
        Cerrar sesión
      </Button>
    </div>
  );
};
