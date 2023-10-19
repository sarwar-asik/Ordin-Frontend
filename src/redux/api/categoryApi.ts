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
      invalidatesTags: ["category"],
    }),
    singleCategory: build.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
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
      providesTags: ["category"],
    }),
    updateCategory: build.mutation({
      query: ({ data, id }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useCategoriesQuery,useUpdateCategoryMutation,useDeleteCategoryMutation,useSingleCategoryQuery } = CategoryApi;
