import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const { id, title, image, price, amount } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* Image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt={title} />
        </Link>

        <div className='w-full flex flex-col'>
          {/* Title & Remove Icon */}
          <div className='flex justify-between mb-2'>
            <Link
              className='text-sm uppercase font-medium max-w-[250px] text-primary hover:underline'
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>

          {/* Quantity, Item Price, Total */}
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* Quantity controls */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* Minus */}
              <div
                onClick={() => decreaseAmount(id)}
                className='flex-1 flex justify-center items-center cursor-pointer'
              >
                <IoMdRemove />
              </div>
              {/* Amount */}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              {/* Plus */}
              <div
                onClick={() => increaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'
              >
                <IoMdAdd />
              </div>
            </div>

            {/* Item Price */}
            <div className='flex-1 flex items-center justify-around'>
              ${price}
            </div>

            {/* Total Price */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
