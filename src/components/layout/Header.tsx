import { Link } from "react-router";
import { Navbar } from "./Navbar";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  return (
    <>
      <div className="w-full  max-h-25" style={{backgroundColor: '#4983f7'}}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to='/'>
            <div className=" text-white p-3 lg:p-0  ">
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
