import { usuario } from "@/helpers/cookies/UserProvider";
import { AccountCircle } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

import { Link } from "react-router";

export const UserMenu = () => {
  return (
    <>
      <Tooltip title={!usuario ? "Iniciar sesión" : "Usuario"}>
        <Link to={"/user"}>
          <button className="flex flex-col items-center justify-center p-2 text-white hover:bg-white/50 rounded-lg transition-colors duration-200 w-22 h-22">
            <div>{<AccountCircle />}</div>
          </button>
        </Link>
      </Tooltip>
    </>
  );
};
