import { NavItems } from "@/helpers/NavItems";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="hidden lg:flex space-x-4">
      {NavItems.map((item, index) => {
        return (
          <Link to={item.route}>
            <button
              key={index}
              className="flex flex-col items-center justify-center p-2 text-white hover:bg-blue-500 rounded-lg transition-colors duration-200"
            >
              <div className="bg-white/10 p-2 rounded-lg mb-1">
                {<item.icon />}
              </div>
              <span className="text-xs text-center ">{item.title}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};
