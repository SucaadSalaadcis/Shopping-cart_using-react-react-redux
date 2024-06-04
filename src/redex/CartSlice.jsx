import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    // actions to perfom
    reducers: {
       addtoCart : (state, action) => {
        state.cart.push(action.payload)
       },
       removefromCart : (state, action) => {
        // finding the index of that array
        // don't take the cart which has the same id & filter all record that is assign to state.cart
        state.cart = state.cart.filter(x => x.id !== action.payload.id);
  
    
       }
    }
})

export default cartSlice.reducer;
export const {addtoCart,removefromCart} = cartSlice.actions;