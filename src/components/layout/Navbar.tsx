import { NavItems } from "@/helpers/NavItems";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { HamburgerMenu } from "./HamburgerMenu";
import { Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])
  

  return (
    <>
      <HamburgerMenu open={open} setOpen={setOpen} />
      <div className="hidden lg:flex">
        {NavItems.map((item, index) => {
          return (
            <Link to={item.children[0].route} key={index}>
              <button
                className={
                  item.children
                    .map((x) => "/" + x.route)
                    .includes(location.pathname)
                    ? `flex flex-col items-center justify-center  text-white bg-white/50  transition-colors duration-200 w-24 h-22`
                    : `flex flex-col items-center justify-center  text-white hover:bg-white/50  transition-colors duration-200 w-24 h-22`
                }
              >
                <div>{<item.icon />}</div>
                <span className="text-xs text-center w-full">{item.title}</span>
              </button>
            </Link>
          );
        })}

      </div>
      <button
          onClick={() => setOpen(!open)}
          className={`flex flex-col items-center justify-center  text-white  transition-colors duration-200 w-24 h-22 lg:hidden`}
        >
          <div>{<Menu />}</div>
        </button>
    </>
  );
};
