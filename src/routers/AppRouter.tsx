import { BrowserRouter as Router, Route, Routes } from "react-router";
import { AppContextProvider } from "@/context/AppContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import LoginScreen from "@/screens/public/login/LoginScreen";
import { NotFoundScreen } from "@/screens/public/notfound/NotFoundScreen";
import { HomeScreen } from "@/screens/public/home/HomeScreen";
import { NavItems } from "@/helpers/NavItems";
import { SubNavbar } from "@/components/layout/SubNavbar";
import { InProcessScreen } from "@/screens/public/inprocess/InProcessScreen";
import { UserScreen } from "@/screens/private/user/UserScreen";
import { RegisterScreen } from "@/screens/public/login/RegisterScreen";

export const AppRouter = () => {
  return (
    <AppContextProvider>
      <Router
        basename={import.meta.env.DEV ? "/" : "/fondocyt/"}
      >
        <AppLayout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<UserScreen />} />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route element={<HomeScreen />} path="/" />
              <Route element={<LoginScreen />} path="/login" />
              <Route element={<RegisterScreen />} path="/register" />

              {NavItems.map((item) => {
                return (
                  <Route element={<SubNavbar NavItems={item.children} />}>
                    {item.children.map((c, i) => {
                      return (
                        <Route
                          key={i}
                          element={<InProcessScreen />}
                          path={c.route}
                        />
                      );
                    })}
                  </Route>
                );
              })}
              <Route path="*" element={<NotFoundScreen />} />
            </Route>
          </Routes>
        </AppLayout>
      </Router>
    </AppContextProvider>
  );
};
