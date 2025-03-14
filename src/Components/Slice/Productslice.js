import { createSlice } from '@reduxjs/toolkit'

export const Produtcslice = createSlice({
  name: 'cart',
  initialState: {
    baritem: localStorage.getItem("cartProduct") ? JSON.parse(localStorage.getItem("cartProduct")) : []
  },
  reducers: {
    barcartitem : (state, action) => {
      const newItemIndex = state.baritem.findIndex((item) => item.id == action.payload.id);

      if (newItemIndex != -1) {
        state.baritem.push(action.payload)
        localStorage.setItem("cartProduct", JSON.stringify(state.baritem))
      } 
      else {
        state.baritem[newItemIndex].qty += 1
        localStorage.setItem("cartProduct", JSON.stringify(state.baritem))
      }
    },
    barreceipt : (state, action) => {
      const newItemIndex = state.baritem.findIndex((item) => item.id == action.payload.id);

      if (newItemIndex != -1) {
        state.baritem.push(action.payload)
        localStorage.setItem("cartProduct", JSON.stringify(state.baritem))
      } 
      else {
        state.baritem[newItemIndex].qty += 1
        localStorage.setItem("cartProduct", JSON.stringify(state.baritem))
      }
    }
  }
})

export const { barcartitem,barreceipt } = Produtcslice.actions

export default Produtcslice.reducer