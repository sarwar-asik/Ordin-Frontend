// Need to use the React-specific entry point to allow generating React hooks
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
// import { getBaseUrl } from "@/helpers/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
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
