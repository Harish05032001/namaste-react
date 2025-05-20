import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearItem } from '../utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  }

  return (
    <div className='text-center m-5 p-5'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto border-2 border-gray-400 p-4 rounded-sm'>
        <button className='p-1 m-1 bg-black text-white rounded-md cursor-pointer' onClick={() => handleClearCart()}>Clear Cart</button>
        {cartItems.length == 0 && (<h1>Cart is empty, Add items to the cart</h1>)}
        <ItemList data={cartItems} />
      </div>
    </div>
  )
}

export default Cart;