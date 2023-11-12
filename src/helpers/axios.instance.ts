import { authKey } from "@/constant/storageKey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/interface";
import {
  getFromLocalStorage,
  getNewAccessToken,
  setToLocalStorage,
} from "@/utils/local.storeage";

import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

//! FOR REQUEST >>>

instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey); //! for yor localStorage accessToken
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// ! for remove ts type error
// @ts-ignore

//! RESPONSE
instance.interceptors.response.use(
  // @ts-ignore

  function (response) {
    const responseObject: ResponseSuccessType = {
      //// ! these property depend on your server response data
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },

  async function (error) {
    const config = error?.config;

    // console.log("🚀 ~ file: axios.instance.ts:44 ~ error:", error);
    if (error?.response?.data?.message === "jwt expired" && !config?.sent) {
      config.sent =true
      // console.log("Jjjjjjjjjjjjjjjjjjjjjjjjj");
      const response = await getNewAccessToken();
      // console.log(response);
      const accessToken = response?.data?.accessToken;
      // console.log(
      //   "🚀 ~ file: axios.instance.ts:50 ~ accessToken:",
      //   accessToken
      // );
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);

      return instance(config);
    }

    const responseObject: IGenericErrorResponse = {
      //// ! these property depend on your server response data
      statusCode: error?.response?.data?.statusCode || 500,
      message:
        error?.response?.data?.message ||
        "something went wrong from axios for server",
      errorMessages: error?.response?.data?.errorMessage,
    };
    // return Promise.reject(error);
    return responseObject;
  }
);

export { instance };
