import React from 'react';

const About = () => {
  return (
    <div className="p-6 md:p-14 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="mb-4 text-lg leading-relaxed">
        Welcome to <span className="text-primary font-semibold">YourStore</span>, your one-stop destination for the best in fashion, electronics, lifestyle, and more. 
        We’re here to bring you quality products, unbeatable prices, and a seamless shopping experience from the comfort of your home.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Our mission is simple: to make online shopping easy, enjoyable, and reliable for everyone. 
        We work with trusted brands and suppliers to ensure that every product we offer meets our high standards of quality and value.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Whether you're upgrading your wardrobe, equipping your kitchen, or finding the perfect gift, 
        <span className="text-primary font-semibold"> YourStore </span> is here to help you shop smarter.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Wide selection of curated, high-quality products</li>
        <li>Secure and user-friendly checkout process</li>
        <li>Fast and reliable shipping</li>
        <li>Dedicated customer support</li>
        <li>Easy returns and satisfaction guarantee</li>
      </ul>

      <p className="mt-8 text-lg">
        Thank you for choosing <span className="text-primary font-semibold">YourStore</span>. 
        We’re excited to be part of your shopping journey!
      </p>
    </div>
  );
};

export default About;
