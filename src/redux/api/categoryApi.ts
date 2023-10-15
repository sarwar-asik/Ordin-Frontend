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
  }),
});

export const { useCreateCategoryMutation,useCategoriesQuery  } = CategoryApi;
