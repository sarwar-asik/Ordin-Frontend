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
          services: response,
          meta,
        };
      },
      providesTags: ["service"],
    }),

    SingleService: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `/service/${data?.id}`,
        method: "PATCH",
        data: data
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useServicesQuery,
  useSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = ServiceApi;
