import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      search: "",
      select: ""
}
export const filterSlice = createSlice({
      name: "filter",
      initialState,
      reducers: {
            selectCategory: (state, action) => {
                  state.select = action.payload
            },
            searchItem: (state, action) => {
                  state.search = action.payload
            }
      }
})

export const { selectCategory, searchItem } = filterSlice.actions
export default filterSlice.reducer