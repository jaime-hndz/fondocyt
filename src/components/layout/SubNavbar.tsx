import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

interface NavItemsInterfaces {
  route: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  title: string;
}
interface Props {
  NavItems: NavItemsInterfaces[];
}

export const SubNavbar: React.FC<Props> = ({ NavItems }) => {
  const location = useLocation();

  console.clear();
  console.log(location.pathname);
  return (
    <>
      <motion.div
  initial={{ opacity: 0,  }} // Estado inicial (oculto)
  animate={{ opacity: 1, }} // Estado visible
  exit={{ opacity: 0,   }} // Estado al salir
  transition={{ duration: 0.5, ease: "easeOut" }} // Duración de la animación
  className="hidden flex pl-10 bg-black/50"
>
        {NavItems.map(
          (
            item: {
              route: string;
              icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
                muiName: string;
              };
              title: string;
            },
            index: number
          ) => {
            return (
              <Link to={item.route}>
                <button
                  key={index}
                  className={
                    location.pathname != "/" + item.route
                      ? "flex flex-col items-center justify-center p-2 text-white hover:bg-white/50 rounded-tl-lg rounded-tr-lg transition-colors duration-200 w-40 h-15"
                      : "flex flex-col items-center justify-center rounded-tl-lg rounded-tr-lg p-2 text-black/50 transition-colors duration-200 w-40 h-15"
                  }
                  style={
                    location.pathname == "/" + item.route
                      ? { backgroundColor: "#eeede8" }
                      : undefined
                  }
                >
                  {item.icon ? <div>{<item.icon />}</div>: null}
                  <span className="text-xs text-center w-full">
                    {item.title}
                  </span>
                </button>
              </Link>
            );
          }
        )}
      </motion.div>
      <div className="lg:px-25 py-10">
        <Outlet />
      </div>
    </>
  );
};
