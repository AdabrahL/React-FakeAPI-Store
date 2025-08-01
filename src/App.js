import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Orders from './pages/Orders';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Sidebar />
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;
