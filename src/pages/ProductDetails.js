import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = () => {
  const { id } = useParams(); // get the product ID from URL
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Convert ID to number since product IDs are numbers in the fake store API
  const product = products.find((item) => item.id === parseInt(id));

  // If product not found yet (because async fetch), show loading
  if (!product) {
    return <div className="text-center mt-20 text-xl">Loading product details...</div>;
  }

  const { title, price, description, image, category } = product;

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Product image */}
        <div className="w-full max-w-sm">
          <img src={image} alt={title} className="w-full object-contain" />
        </div>

        {/* Product details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">{title}</h1>
          <p className="text-gray-500 text-sm mb-2 capitalize">Category: {category}</p>
          <p className="text-lg font-bold mb-4">${price}</p>
          <p className="text-gray-700 mb-6">{description}</p>
          <button
            onClick={() => addToCart(product, product.id)}
            className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
