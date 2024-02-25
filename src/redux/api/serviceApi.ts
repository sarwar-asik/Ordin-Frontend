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
      invalidatesTags: ["service", "category"],
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
      providesTags: ["service", "category"],
    }),

    SingleService: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: ["service", "category"],
    }),
    updateService: build.mutation({
      query: ({ data, id }) => ({
        url: `/service/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["service", "category"],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service", "category"],
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
