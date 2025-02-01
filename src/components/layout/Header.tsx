import { Button } from "@mui/material";
import Cookies from "universal-cookie";
import { Link } from "react-router";
import { usuario } from "../../helpers/cookies/UserProvider";
import {AccessibilityNewOutlined, Map, DirectionsBoat, Festival} from '@mui/icons-material';
const cookies = new Cookies();

export const Header = () => {
  const handleLogout = () => {
    // Remove username and password from cookies
    cookies.remove("user", { path: "/" });
    window.location.reload();
  };

  const menuItems = [
    { icon: < Map />, label: "Herramienta 1", link: "herramienta1" },
    { icon: < AccessibilityNewOutlined />, label: "Herramienta 2", link: "herramienta2" },
    { icon: < DirectionsBoat />, label: "Herramienta 3", link: "herramienta3" },
    { icon: < Festival />, label: "Herramienta 4", link: "herramienta4", restricted: true },
  ];

  return (
    <>
      <div className="w-full bg-blue-400 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to='/'>
            <div className="flex items-center text-white">
              <div className="text-2xl font-bold">STGO</div>
              <div className="ml-2 text-sm">OBSERVATORIO</div>
            </div>
            </Link>

            {/* Navigation Items */}
            <div className="hidden lg:flex space-x-4">
              {menuItems.map((item, index) => {

                if(item.restricted && !usuario)
                    return null

                return (
                    <Link to={item.link}>
                      <button
                        key={index}
                        className="flex flex-col items-center justify-center p-2 text-white hover:bg-blue-500 rounded-lg transition-colors duration-200"
                      >
                        <div className="bg-white/10 p-2 rounded-lg mb-1">
                          {item.icon}
                        </div>
                        <span className="text-xs text-center whitespace-nowrap">
                          {item.label}
                        </span>
                      </button>
                    </Link>
                  )
              })}
            </div>

            {usuario ? (
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            style={{ marginTop: "8px" }}
          >
            Logout
          </Button>
        ) : (
          <Link to={"/login"}>
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: "8px" }}
            >
              Iniciar sesión
            </Button>
          </Link>
        )}

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
