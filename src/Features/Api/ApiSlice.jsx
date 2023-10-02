import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
      reducerPath:"productApi",
      baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000"}),
      tagTypes:["Products","Carts"],
      endpoints:(builder)=>({})

})
