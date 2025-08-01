import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import { OrdersProvider } from './contexts/OrdersContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SidebarProvider>
  <CartProvider>
   <ProductProvider>
    <OrdersProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </OrdersProvider>
   </ProductProvider>
  </CartProvider>
</SidebarProvider>
);
