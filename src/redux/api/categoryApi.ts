import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";

export const CategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (categoryData) => ({
        url: "/category",
        method: "POST",
        data: categoryData,
      }),
      invalidatesTags:["service", "category"],
    }),
    singleCategory: build.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags:["service", "category"],
    }),
    categories: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/category",
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
      providesTags:["service", "category"],
    }),
    updateCategory: build.mutation({
      query: ({ data, id }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags:["service", "category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["service", "category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useCategoriesQuery,useUpdateCategoryMutation,useDeleteCategoryMutation,useSingleCategoryQuery } = CategoryApi;
