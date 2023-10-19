import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";

export const FAQsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFAQ: build.mutation({
      query: (FAQData) => ({
        url: "/FAQ",
        method: "POST",
        data: FAQData,
      }),
      invalidatesTags: ["FAQ"],
    }),
    FAQAll: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/FAQ",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          FAQs: response,
          meta,
        };
      },
      providesTags: ["FAQ"],
    }),
     singleFAQs: build.query({
      query: (id) => ({
        url: `/FAQ/${id}`,
        method: "GET",
      }),
      providesTags: ["FAQ"],
    }),
    updateFAQ: build.mutation({
      query: ({ data, id }) => ({
        url: `/FAQs/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["FAQ"],
    }),
    deleteFAQ: build.mutation({
      query: (id) => ({
        url: `/FAQs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAQ"],
    }),
  }),
});

export const { useCreateFAQMutation, useFAQAllQuery,useUpdateFAQMutation,useDeleteFAQMutation,useSingleFAQsQuery } = FAQsApi;
