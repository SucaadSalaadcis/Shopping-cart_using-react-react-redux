import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removefromCart } from './CartSlice';

function Checkout() {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch()
  return (
    // now we will print the data that we have in our cart
    <div className='mb-32'> 
     <h4 className='font-bold text-4xl ml-[10%] mt-[100px]'>Cart Items</h4>
     {
        cartItems.map(item => {
            return (
                <div className='border-2 mt-16  border-gray-300 w-[50%] h-[120px]  flex ml-[100px] shadow-lg'>
                   <img src={item.img} className='w-[140px] h-[90px] mt-3 border-2 border-gray-300 ml-5' alt="" />
                   <h1 className='ml-20 font-bold mt-10'>{item.title}</h1>
                   <button onClick={() => dispatch(removefromCart({id:item.id}))} className='ml-20 font-bold mt-10 h-[35px] text-white w-[73px] bg-black rounded-md'> remove</button>
                </div>
            )
        })
     }
    </div>
  )
}

export default Checkout