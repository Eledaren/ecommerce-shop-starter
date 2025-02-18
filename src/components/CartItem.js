import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext'

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  //desctructure item
  const {id, title, image, price, amount} = item
  return (
  <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-700'>
    <div className='w-full min-h-[150px] flex item-center gap-x-4'>
      {/*image*/}
      <Link to={`/product/${id}`}>
        <img 
          className='max-w-[80px]'
          src={image} 
          alt="" 
          />
      </Link>
      <div className='w-full flex flex-col'>
        {/*title & remove icon*/}
        <div className='flex justify-between mb-2'>
          {/*title*/}
          <Link 
            className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            to={`/product/${id}`}
          >
            {title}
          </Link>
          {/*remove icon*/}
          <div 
            className='text-xl cursor-pointer'
            onClick={() => removeFromCart(id)}
          >
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px] text-sm'>
          {/*qty*/}
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            <div 
              className='flex-1 cursor-pointer h-full flex justify-center items-center hover:bg-red-500 h-full'
              onClick={() => decreaseAmount(id)}
            >
              <IoMdRemove />
            </div>
            <div className='h-full flex justify-center items-center px-2'>
              {amount}
            </div>
            <div 
              className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-blue-500'
              onClick={() => increaseAmount(id)}
            >
              <IoMdAdd />
            </div>
          </div>
          {/*item price*/}
          <div className='flex flex-1 items-center justify-around'>
            $ {price}
          </div>
          {/*final price*/}
          <div className='flex flex-1 justify-end items-center text-primary font-medium '>
            $ ${price * amount}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem
