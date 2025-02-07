import { NavItems } from "@/helpers/NavItems";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="mr-3"></div>
              <div>
                <div className="text-xl font-bold">
                  Observatorio Bajos de Haina
                </div>
                {/*logo*/}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-right text-sm w-md">
            <div className="text-xl font-bold">Bajos de Haina</div>
            <div className="text-sm text-gray-300">San Cristóbal</div>
            <div className="mb-1">República Dominicana</div>
            <div className="text-sm text-blue-400">
              <Link className="hover:text-white" to={"/"}>Inicio </Link>
              {NavItems.map((i) => (
                <>
                  | <Link className="hover:text-white" to={i.children[0].route}>{i.title}</Link>{" "}
                </>
              ))}
            </div>

            <div className="text-gray-400 text-xs">
              Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
