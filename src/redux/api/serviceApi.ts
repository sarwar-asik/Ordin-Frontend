import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";

export const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (serviceData) => ({
        url: "/service",
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: ["service"],
    }),
    services: build.query({
        query: (arg: Record<string, any>) => {
          return {
            url: "/service",
            method: "GET",
            params: arg,
          };
        },
        transformResponse: (response: any[], meta: IMeta) => {
          return {
            category: response,
            meta,
          };
        },
        providesTags: ["service"],
      }),
  }),
});

export const { useCreateServiceMutation,useServicesQuery } = ServiceApi;
