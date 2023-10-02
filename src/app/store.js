import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/Api/ApiSlice.jsx";
import filterReducer from "../Features/FilterItem/Fitlter.jsx"
export const store = configureStore({
      reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            filter: filterReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})