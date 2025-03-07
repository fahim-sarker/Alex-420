import { createSlice } from '@reduxjs/toolkit'

export const Productslice = createSlice({
  name: 'product',
  initialState: {
    cartitem:localStorage.getItem("cart") ?JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    Addtocart: (state,action) => {
      let findproduct = state.cartitem.findIndex((item)=>item.id == action.payload.id)
      if(findproduct !== -1){
        state.cartitem[findproduct].quantity += 1
        localStorage.setItem("cart",JSON.stringify(state.cartitem))
      }else{
        state.cartitem=[...state.cartitem,action.payload]
        localStorage.setItem("cart",JSON.stringify(state.cartitem))
      }
    },

  },
})

export const {Addtocart} = Productslice.actions

export default Productslice.reducer