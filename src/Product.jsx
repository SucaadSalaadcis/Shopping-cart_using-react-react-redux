import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from './redex/CartSlice';

function Product({id,title,img}) {
  
  const dispatch = useDispatch();
  return (
    <div >
        <h2 className='ml-5 font-bold mt-3'>{title}</h2>
        <img src={img} alt="" />
        <br />
        {/* title & img will be stored to that array and the id*/}
        <button onClick={() => dispatch(addtoCart({id,title,img}))} className='bg-lime-400 font-semibold p-3 ml-16 mb-3 rounded-md'>Add to cart</button>
    </div>
  )
}

export default Product