// Need to use the React-specific entry point to allow generating React hooks
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
// import { getBaseUrl } from "@/helpers/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://backend-ordain-168ltp3bx-sarwar-asik.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: [
    "auth",
    "category",
    "service",
    "cart",
    "booking",
    "user",
    "review",
    "blogs",
    "FAQ",
  ],
});
