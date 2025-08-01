import React, { useContext } from 'react';
import { OrdersContext } from '../contexts/OrdersContext';

const Orders = () => {
  const { orders } = useContext(OrdersContext);

  if (orders.length === 0) {
    return <div className="p-14 text-lg">No orders yet.</div>;
  }

  return (
    <div className="p-4 md:p-14">
      <h2 className="text-2xl font-bold mb-8">Your Orders</h2>

      {orders.map(order => {
        const orderTotal = order.items.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        );

        return (
          <div
            key={order.id}
            className="mb-10 border border-gray-300 p-6 rounded-lg shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Order #{order.id}</h3>
              <p className="text-sm font-medium text-primary">
                Total: ${orderTotal.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              {order.items.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Image + title + quantity */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.amount}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-sm font-semibold text-gray-800">
                    ${(item.price * item.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
