import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";

export const ReviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (ReviewData) => ({
        url: "/reviews",
        method: "POST",
        data: ReviewData,
      }),
      invalidatesTags: ["review"],
    }),
    reviews: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/review",
          method: "GET",
          query: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          Reviews: response,
          meta,
        };
      },
      providesTags: ["review"],
    }),
    userReviewByService: build.query({
      query: (serviceId) => ({
        url: `/reviews/${serviceId}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
     userAllReviews: build.query({
      query: () => ({
        url: `/reviews/userReview`,
        method: "GET",
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          Reviews: response,
          meta,
        };
      },
      providesTags: ["review"],
    }),
    updateReview: build.mutation({
      query: (data) => ({
        url: `/reviews/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: ["review"],
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useReviewsQuery,
  useUserReviewByServiceQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useUserAllReviewsQuery
} = ReviewApi;
