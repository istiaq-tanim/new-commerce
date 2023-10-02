import { apiSlice } from "../Api/ApiSlice"
export const productApi = apiSlice.injectEndpoints({
      endpoints: (builder) => ({
            getProducts: builder.query({
                  query: ({ select, search}) => {
                        let query = ""
                        if(select !== "" && search !== "")
                        {
                              query+=`&category=${select}&search=${search}`
                        }
                        else if (select !== "") {
                              query+=`&category=${select}`
                        }
                        else if(search !== "")
                        {
                              query+=`&search=${search}`
                        }
                        return `/products?${query}`
                  },
                  providesTags: ["Products"]
            }),
            addProduct: builder.mutation({
                  query: (data) => ({
                        url: "/addProduct",
                        method: "POST",
                        body: data,
                  }),
                  invalidatesTags: ["Products"]
            }),
            getPaginate:builder.query({
                  query:({page,limit})=>`/paginateProducts?page=${page}&limit=${limit}`
            }), providesTags: ["Products"]

      })
})
export const { useAddProductMutation, useGetProductsQuery,useGetPaginateQuery } = productApi

