import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      cartItems: localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items")) : [],
      quantityCount: 0,
      quantityAmount: 0
}
export const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            addToCart: (state, action) => {
                  const index = state.cartItems.findIndex(item => item._id === action.payload._id)
                  if (index > -1) {
                        state.cartItems[index].quantity += 1
                  }
                  else {
                        const updateCart = { ...action.payload, quantity: 1 }
                        state.cartItems.push(updateCart)
                  }
                  localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
            },
            removeCart: (state, action) => {
                  const remainingItem = state.cartItems.filter(item => item._id !== action.payload)
                  state.cartItems = remainingItem
                  localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
            },
            decrementItem: (state, action) => {
                  const index = state.cartItems.findIndex(item => item._id === action.payload._id)
                  if (state.cartItems[index].quantity > 1) {
                        state.cartItems[index].quantity -= 1
                  }
                  else {
                        const remainingItem = state.cartItems.filter(item => item._id !== action.payload._id)
                        state.cartItems = remainingItem
                  }
                  localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
            }, totalCalculation: (state) => {
                  const { totalAmount, totalQuantity } = state.cartItems.reduce((previousItem, currentItem) => {
                        const { price, quantity } = currentItem
                        previousItem.totalAmount += parseFloat(price) * quantity
                        previousItem.totalQuantity += quantity

                        return previousItem
                  }, {
                        totalAmount: 0,
                        totalQuantity: 0
                  })
                  state.quantityCount = totalQuantity
                  state.quantityAmount = totalAmount
            },
            

      }
})
export const { addToCart, removeCart, decrementItem , totalCalculation} = cartSlice.actions
export default cartSlice.reducer