// Need to use the React-specific entry point to allow generating React hooks
import { getBaseUrl } from "@/helpers/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl()}),
  endpoints: () => ({}),
  tagTypes:['auth']
})

