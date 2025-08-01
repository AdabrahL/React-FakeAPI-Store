import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/LOGO3.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-[40px]' src={Logo} alt='Logo' />
        </Link>

        {/* Navigation */}
        <nav className='flex gap-10 text-sm font-medium'>
          <Link to='/' className='hover:text-red-500 transition'>Home</Link>
          <Link to='/shop' className='hover:text-red-500 transition'>Shop</Link>
          <Link to='/about' className='hover:text-red-500 transition'>About</Link>
          <Link to='/contact' className='hover:text-red-500 transition'>Contact</Link>
          <Link to='/orders' className='hover:text-red-500 transition'>Orders</Link>
        </nav>

        {/* Cart Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute right-2 bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
