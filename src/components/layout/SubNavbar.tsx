import React from "react";
import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
interface Props {
  NavItems: []
}

export const SubNavbar: React.FC<Props> = ({NavItems}) => {
  const location = useLocation();

  console.clear()
  console.log(location.pathname)
    return (
        <>
        <div className="hidden lg:flex pl-10 bg-black/50">
          {NavItems.map((item: {route: string, icon: any, title: string}, index:number) => {
              return (
                  <Link to={item.route}>
                <button
                  key={index}
                  className={location.pathname != "/" + item.route 
                    ? "flex flex-col items-center justify-center p-2 text-white hover:bg-white/50 rounded-tl-lg rounded-tr-lg transition-colors duration-200 w-22 h-22"
                    : "flex flex-col items-center justify-center rounded-tl-lg rounded-tr-lg p-2 text-black/50 transition-colors duration-200 w-22 h-22"
                  }
                  style={location.pathname == "/" + item.route ? {backgroundColor:   "#eeede8"}: undefined}
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
        <Outlet />
        </>)
}
