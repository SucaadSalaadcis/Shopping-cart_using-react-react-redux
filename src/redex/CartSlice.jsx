import { createSlice } from "@reduxjs/toolkit";


//   Creating a slice requires a string name to identify the slice,
// an initial state value, and one or more reducer functions to define how the state can be updated.
// Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
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