import { apiSlice } from "../Api/ApiSlice";
export const cartApi = apiSlice.injectEndpoints({
      endpoints: (builder) => ({
            addCart: builder.mutation({
                  query: (data) => ({
                        url: "/addCart",
                        body: data,
                        method: "POST"
                  }),
                  invalidatesTags: ["Carts"]
            }),
            getCart: builder.query({
                  query: () => "/getCart",
                  providesTags: ["Carts"]
            }),
            removeCart: builder.mutation({
                  query: (id) => ({
                        url: `/deleteCart/${id}`,
                        method: "DELETE"
                  }),
                  invalidatesTags: ["Carts"]
            }),
            incrementCart: builder.mutation({
                  query: (id) => ({
                        url: `/incrementCart/${id}`,
                        method:"PATCH"
                  }),
                  invalidatesTags: ["Carts"]
            }),
            decrementCart:builder.mutation({
                  query:(id)=>({
                        url:`decrementCart/${id}`,
                        method:"PATCH"
                  }),
                  invalidatesTags:["Carts"]
            })
      })
})

export const {useDecrementCartMutation, useAddCartMutation, useGetCartQuery, useRemoveCartMutation ,useIncrementCartMutation} = cartApi