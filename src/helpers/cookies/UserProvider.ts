/* eslint-disable no-var */
import Cookies from "universal-cookie";

const cookies = new Cookies();
export var usuario = cookies.get("user");

export var token = cookies.get("token");

export var applicationRealms = cookies.get("applicationrealms")

export var userRealm = () =>{
    return usuario.realmId
}

export const changeRealmId = (rId: string) => {
    var fechaExpiracion = new Date(usuario.expirationDate)
    var updatedUser = usuario
    updatedUser.realmId = rId
    cookies.set('usuario', usuario, {expires: fechaExpiracion})
}

export var masterData = cookies.get("masterdata")