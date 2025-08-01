// src/contexts/OrdersContext.js
import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderItems) => {
    setOrders(prev => [...prev, { id: Date.now(), items: orderItems }]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
