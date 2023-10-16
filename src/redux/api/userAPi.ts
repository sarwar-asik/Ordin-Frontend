import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (userData) => ({
        url: "/user",
        method: "POST",
        data: userData,
      }),
      invalidatesTags: ["user"],
    }),
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/user",
          method: "GET",
          query: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: ["user"],
    }),
    profileUser: build.query({
      query: () => ({
        url: `/user/profile`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/user/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useProfileUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
