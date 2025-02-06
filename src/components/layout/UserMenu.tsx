import { usuario } from "@/helpers/cookies/UserProvider";
import { AccountCircle, ExitToApp, Person } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Remove username and password from cookies
    cookies.remove("user", { path: "/" });
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-center p-2 text-white hover:bg-blue-500 rounded-lg transition-colors duration-200 w-22 h-22"
      >
        <div>{<AccountCircle />}</div>
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock={true}
      >
        {usuario ? (
          <>
            <Link to={"/user"}>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                Usuario
                </MenuItem>
            </Link>
            <MenuItem color="error" onClick={handleLogout} className="text-red-400">
                <ListItemIcon>
                    <ExitToApp />
                </ListItemIcon>
              Cerrar sesión
            </MenuItem>
          </>
        ) : (
          <Link to={"/login"}>
            <MenuItem color="primary">
              Iniciar sesión
            </MenuItem>
          </Link>
        )}
        
      </Menu>
    </div>
  );
};
