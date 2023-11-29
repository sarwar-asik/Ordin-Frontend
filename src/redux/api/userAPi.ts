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
    createAdmin: build.mutation({
      query: (adminData) => ({
        url: "/user/create-admin",
        method: "POST",
        data: adminData,
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
    singleUser: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateProfile: build.mutation({
      query: (userData) => ({
        url: `/user/update`,
        method: "PATCH",
        data: userData,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: ({data,id}) => ({
        url: `/user/${id}`,
        method: "PUT",
        data:data
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
  useUpdateProfileMutation,
  useDeleteUserMutation,
  useUsersQuery,
  useSingleUserQuery,
  useUpdateUserMutation,
  useCreateAdminMutation
} = userApi;
