import { authKey } from "@/constant/storageKey";
import { instance as axiosInstance } from "@/helpers/axios.instance";
import { getBaseUrl } from "@/helpers/config";
import jwtDecode from "jwt-decode";

export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  // console.log(accessToken,"from storeUserInfo");
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authLocalStorageToken = getFromLocalStorage(authKey);
  // console.log(authLocalStorageToken);
  if (authLocalStorageToken) {
    const decoded = jwtDecode(authLocalStorageToken);
    // console.log(decoded, "from getUserInfo");
    return decoded;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authLocalStorageToken = getFromLocalStorage(authKey);
  //! important !! used for if  authLocalStorageToken  is stay it will return true
  return !!authLocalStorageToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
