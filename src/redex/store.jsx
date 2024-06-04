import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice'

// This creates a Redux store
 const  store = configureStore({
    reducer: {
       // reducer : is a single function, it will be directly used as the root reducer for the store
     cart: CartSlice
    }
})

export default store;