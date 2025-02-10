import { Link } from "react-router";
import { Navbar } from "./Navbar";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  return (
    <>
      <div className="w-full p-1 max-h-25" style={{backgroundColor: '#4983f7'}}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to='/'>
            <div className=" text-white w-3xs ">
              <div className="text-2xl font-bold">Bajos de Haina</div>
              <div className="  text-sm">OBSERVATORIO</div>
            </div>
            </Link>

            <Navbar />

            <UserMenu />
          </div>
        </div>
      </div>
    </>
  );
};
