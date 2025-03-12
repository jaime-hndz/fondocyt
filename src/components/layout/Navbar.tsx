import { NavItems } from "@/helpers/NavItems";
import { Link } from "react-router";
import { useLocation } from "react-router";

export const Navbar = () => {

  const location = useLocation();

  return (
    <div className="hidden lg:flex">
      {NavItems.map((item, index) => {
        return (
          <Link to={item.children[0].route} key={index}>
            <button
              className={
                item.children.map(x => "/" + x.route).includes(location.pathname)   
                  ? `flex flex-col items-center justify-center  text-white bg-white/50  transition-colors duration-200 w-24 h-22`
                  : `flex flex-col items-center justify-center  text-white hover:bg-white/50  transition-colors duration-200 w-24 h-22`}
            >
              <div>{<item.icon />}</div>
              <span className="text-xs text-center w-full">
                {item.title}
              </span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};
