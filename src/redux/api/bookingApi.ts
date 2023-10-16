import { IMeta } from "@/interface";
import { baseApi } from "./baseApi";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (bookingData) => ({
        url: "/booking",
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),
    bookings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/booking",
          method: "GET",
          query: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: ["booking"],
    }),
    userAllBookings: build.query({
      query: () => ({
        url: `/booking/userBooking`,
        method: "GET",
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: ["booking"],
    }),
    updateBooking: build.mutation({
      query: (data) => ({
        url: `/booking/${data?.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["booking"],
    }),
    
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useBookingsQuery,
  useUserAllBookingsQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
