// Need to use the React-specific entry point to allow generating React hooks
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl()}),
  endpoints: () => ({}),
  tagTypes:['auth','category','service','cart','booking','user',"review","blogs"]
})

