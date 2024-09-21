"use client";

import { useEffect, useState } from "react";

export default function CheckoutItems() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = () => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);
  };

  const handleFinishPurchase = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <div className="bg-gray-800 text-white p-8 w-full max-w-4xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-700 p-4 rounded-lg shadow-sm space-x-6"
            >
              <img
                src={item.image}
                className="h-[100px] w-[80px] object-cover rounded-md"
                alt={item.name}
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-sky-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="mt-2 text-red-500 hover:text-red-600 font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-700 pt-4 mt-4 flex justify-end gap-2 items-center">
            <span className="text-xl font-bold">Total Price:</span>
            <span className="text-2xl font-bold text-sky-500">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleFinishPurchase}
              className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            >
              Finish Purchase
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Your cart is empty</p>
      )}
    </div>
  );
}
