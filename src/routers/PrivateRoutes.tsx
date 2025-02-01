import { Outlet, Navigate } from "react-router";
import { usuario } from "../helpers/cookies/UserProvider";

export const PrivateRoutes = () => {
  return usuario ? (
      <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
