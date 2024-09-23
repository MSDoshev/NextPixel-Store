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
        console.log(data);

        setOrders(data.purchases);
      } catch (error) {
        console.error("Error fetching purchase history:", error);
      }
    };

    fetchPurchaseHistory();
  }, []);

  return (
    <div className="p-10 w-[75%]">
      <h1 className="text-3xl font-bold text-center mb-5">Purchase History</h1>
      {orders.length > 0 ? (
        <ul className="flex flex-col space-y-4">
          {orders.map((order) => (
            <li
              key={order._id}
              className="border rounded-md p-4 bg-white shadow-sm"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold">
                  Order #{order.orderNumber}
                </h2>
                <p className="text-gray-600">
                  <span className="font-bold">Total Price: </span>$
                  {order.totalPrice.toFixed(2)}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Order Date: </span>
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <ul className="space-y-4">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="relative flex flex-row gap-4 bg-white border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover"
                    />
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Price: </span>$
                        {item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Quantity: </span>
                        {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Total: </span>$
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">
          You have no purchase history.
        </p>
      )}
    </div>
  );
}
