import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
import { Button } from "@mui/material";
import Cookies from "universal-cookie";
import { Link } from "react-router";
import { usuario } from "../../helpers/cookies/UserProvider";

const cookies = new Cookies();

export const AppLayout: React.FC<Props> = ({ children }) => {
  const handleLogout = () => {
    // Remove username and password from cookies
    cookies.remove("user", { path: "/" });
    window.location.reload();
  };
  return (
    <div className="page">
      <div className="bg-red-100 flex gap-10  content-center">
        <Link to={'/'}>home</Link>
        <Link to={'/herramienta1'}>herramienta 1</Link>
        <Link to={'/herramienta2'}>herramienta 2</Link>
        <Link to={'/herramienta3'}>herramienta 3</Link>
        {usuario ? <Link to={'/herramienta4'}>herramienta 4</Link> : null}

        {usuario ?         <Button
          variant="outlined"
          color="secondary"
          onClick={handleLogout}
          style={{ marginTop: "8px" }}
        >
          Logout
        </Button> :  <Link to={'/login'}>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginTop: "8px" }}
        >
          Iniciar sesión
        </Button>
        </Link>      }

      </div>
      <div className="bg-blue-100">{children}</div>
    </div>
  );
};
