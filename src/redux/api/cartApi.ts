import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCart: build.mutation({
      query: (cartData) => ({
        url: "/cart",
        method: "POST",
        data: cartData,
      }),
      invalidatesTags: ["cart"],
    }),
    carts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/cart",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          carts: response,
          meta,
        };
      },
      providesTags: ["cart"],
    }),

    SingleCart: build.query({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    updateCart: build.mutation({
      query: (data) => ({
        url: `/cart/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteCart: build.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
 useCreateCartMutation, useCartsQuery,useSingleCartQuery,useUpdateCartMutation,useDeleteCartMutation
} = cartApi;
