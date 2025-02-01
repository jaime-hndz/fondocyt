import Cookies from "universal-cookie";
const cookies = new Cookies();
export const UserRemover = () =>{
    cookies.remove("usuario", { path: "/" });
    cookies.remove("token", { path: "/" });
    cookies.remove("applicationrealms", { path: "/" });
    cookies.remove("masterdata", { path: "/" });


    window.location.reload();
}