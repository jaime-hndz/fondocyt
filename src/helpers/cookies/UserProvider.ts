/* eslint-disable no-var */
import Cookies from "universal-cookie";

const cookies = new Cookies();
export var usuario = cookies.get("user");

export var token = cookies.get("token");


