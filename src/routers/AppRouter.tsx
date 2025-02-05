import { BrowserRouter as Router, Route, Routes } from "react-router";
import { AppContextProvider } from "@/context/AppContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import LoginScreen from "@/screens/public/login/LoginScreen";
import { NotFoundScreen } from "@/screens/public/notfound/NotFoundScreen";
import { HomeScreen } from "@/screens/public/home/HomeScreen";
import { NavItems } from "@/helpers/NavItems";
import { UsuarioScreen } from "@/screens/public/tools/UsuarioScreen";

export const AppRouter = () => {
  return (
    <AppContextProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<UsuarioScreen />} />
            
            </Route>
            <Route element={<PublicRoutes />}>
              <Route element={<HomeScreen />} path="/" />
              <Route element={<LoginScreen />} path="/login" />
              {NavItems.map((item) =>
                item.children.map((c, i) => {
                  return (
                    <Route key={i} element={<c.element />} path={c.route} />
                  );
                })
              )}
              <Route path="*" element={<NotFoundScreen />} />
            </Route>
          </Routes>
        </AppLayout>
      </Router>
    </AppContextProvider>
  );
};
