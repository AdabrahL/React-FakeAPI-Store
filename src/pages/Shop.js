import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

// Dummy data if you don't have products context yet
const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 49.99,
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  },
  {
    id: 2,
    title: 'Running Shoes',
    price: 79.99,
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  {
    id: 3,
    title: 'Smart Watch',
    price: 129.99,
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  },
  {
    id: 4,
    title: 'Men’s Jacket',
    price: 89.99,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6 md:p-14 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Explore Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h2>
              <p className="text-primary text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
