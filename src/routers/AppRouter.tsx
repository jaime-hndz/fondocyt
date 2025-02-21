import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router";
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
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export const AppRouter: React.FC = () => {
  return (
    <AppContextProvider>
      <Router basename={import.meta.env.DEV ? "/" : "/fondocyt/"}>
        <AppLayout>
          <AnimatedRoutes />
        </AppLayout>
      </Router>
    </AppContextProvider>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<PrivateRoutes />}>
          <Route path="/user" element={<PageWrapper><UserScreen /></PageWrapper>} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="/" element={<PageWrapper><HomeScreen /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><LoginScreen /></PageWrapper>} />
          <Route path="/register" element={<PageWrapper><RegisterScreen /></PageWrapper>} />

          {NavItems.map((item, i) => (
            <Route key={i} element={<SubNavbar NavItems={item.children} />}>
              {item.children.map((c, i) => (
                <Route
                  key={i}
                  element={<PageWrapper>{c.element ? <c.element /> : <InProcessScreen />}</PageWrapper>}
                  path={c.route}
                />
              ))}
            </Route>
          ))}

          <Route path="*" element={<PageWrapper><NotFoundScreen /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

// Define la estructura de props con TypeScript
interface PageWrapperProps {
  children: ReactNode;
}

// Componente para animación de página
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AppRouter;
