import { usuario } from "@/helpers/cookies/UserProvider";
import { NavItems } from "@/helpers/NavItems";
import { AccountCircle } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export const HamburgerMenu: FC<{
  open: boolean;
  setOpen: (bool: boolean) => void;
}> = ({ open, setOpen }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-black/50 w-screen h-screen fixed left-0 top-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="w-1/2 h-screen fixed left-0 top-0 z-50"
            style={{ backgroundColor: "#eeede8" }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            {NavItems.map((item, index) => (
              <Link to={item.children[0].route} key={index}>
                <button className="px-10 my-3 flex gap-3 items-center transition-colors duration-200 w-full h-11">
                  <div>{<item.icon />}</div>
                  <span className="text-xs text-center w-full">{item.title}</span>
                </button>
              </Link>
            ))}
            <Link to={"/user"}>
              <button className="px-10 my-3 flex gap-3 items-center transition-colors duration-200 w-full h-11">
                <div>{<AccountCircle />}</div>
                <span className="text-xs text-center w-full">
                  {!usuario ? "Iniciar sesión" : "Usuario"}
                </span>
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};