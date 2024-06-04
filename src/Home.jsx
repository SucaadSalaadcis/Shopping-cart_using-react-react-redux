import React from 'react'
import Product from './Product'
// to get data to ourt store we use another hook
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

/*  */

function Home() {
    // we will get all the items which are in the cart
    // cart.cart means:
    //  first we should get the store cart then the data cart in the carSlice component
    const cartItems = useSelector(state => state.cart.cart)
  return (
    <div className='w-[100%]   flex flex-col'>
       <div className='flex justify-between text-2xl px-4 pt-5 h-[60px] bg-black text-white'>
        <h2>Code</h2>
        <Link to={'/checkout'}>Cart <small>({cartItems.length})</small> </Link>
       </div>

       <div className='flex flex-wrap mt-20 space-x-10 ml-72'>

        <div className='border w-[240px]'>
            <Product 
            id = "1"
            title="This is beautifull mobile"  
            img="https://img.freepik.com/premium-vector/mobile-app-online-video-chat-phone-screen-flat-illustration_181313-529.jpg?w=740"/>
        </div>
        <div className='border w-[240px]'>
            <Product
              id = "2"
             title="This is beautifull Laptop" 
              img="https://img.freepik.com/premium-photo/laptop-isolated-white-background-3d-rendering-computer-generated-image_1142-50429.jpg?w=740"/>
        </div>
        <div className='border w-[240px]'>
            <Product 
              id = "3"
            title="This is beautifull an Ipad" 
            img="https://img.freepik.com/free-psd/full-screen-tablet-mockup-design_53876-65982.jpg?t=st=1717484426~exp=1717488026~hmac=014e91d79de9e93b95c37b7f1217901bb6876eb6a3f0ff99a0da08f558025068&w=740" />
        </div>

       

       </div>
    </div>
  )
}

export default Home