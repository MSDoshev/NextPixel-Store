"use client";

import { useEffect, useState } from "react";

export default function PurchaseHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchPurchaseHistory = async () => {
      try {
        const response = await fetch("/api/purchase-history");
        if (!response.ok) {
          throw new Error("Failed to fetch purchase history");
        }
        const data = await response.json();
        setOrders(data.purchases);
      } catch (error) {
        console.error("Error fetching purchase history:", error);
      }
    };

    fetchPurchaseHistory();
  }, []);

  return (
    <div className="md:p-10 w-full mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Purchase History</h1>
      {orders.length > 0 ? (
        <ul className="space-y-6">
          {orders.map((order) => (
            <li
              key={order._id}
              className="border border-gray-300 rounded-lg p-4 md:p-6 bg-white shadow-lg transition-transform transform hover:scale-105 w-full"
            >
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Order #{order.orderNumber}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Total Price: </span>$ {order.totalPrice.toFixed(2)}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Order Date: </span>
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <ul className="space-y-4">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md w-full"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-32 h-32 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Price: </span>$ {item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Quantity: </span>
                        {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Total: </span>$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">You have no purchase history.</p>
      )}
    </div>
  );
}
