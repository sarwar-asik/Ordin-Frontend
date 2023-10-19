import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";

export const BlogsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (BlogData) => ({
        url: "/blogs",
        method: "POST",
        data: BlogData,
      }),
      invalidatesTags: ["blogs"],
    }),
    blogs: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/blogs",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: ["blogs"],
    }),
     singleBlogs: build.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    updateBlog: build.mutation({
      query: ({ data, id }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const { useCreateBlogMutation, useBlogsQuery,useUpdateBlogMutation,useDeleteBlogMutation,useSingleBlogsQuery } = BlogsApi;
