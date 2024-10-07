"use client";

import Link from "next/link";
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

  const handleFinishPurchase = async () => {
    try {
      const orderData = {
        items: cartItems,
        totalPrice,
      };

      const response = await fetch("/api/finish-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to complete purchase");
      }

      const result = await response.json();

      alert("Thank you for your purchase!");
      localStorage.removeItem("cart");
      setCartItems([]);
      const event = new CustomEvent("cartUpdated");
      window.dispatchEvent(event);

      console.log("Order Details:", result.order);
    } catch (error) {
      console.error("Purchase error:", error);
      alert("There was an error processing your purchase.");
    }
  };

  return (
    <div className="md:px-[30px] lg:py-[80px] lg:px-[200px] w-full mx-auto">
      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between md:gap-[40px]">
          <div className="w-full max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 rounded-lg shadow-sm space-x-6"
              >
                <Link href={`/store/${item.id}`}>
                  <img
                    src={item.image}
                    className="h-[100px] w-[80px] object-cover rounded-md cursor-pointer"
                    alt={item.name}
                  />
                </Link>
                <div className="flex-1">
                  <Link href={`/store/${item.id}`}>
                    <h3 className="text-xl font-semibold cursor-pointer hover:text-sky-500">
                      {item.name}
                    </h3>
                  </Link>
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
          </div>
          <div className="flex flex-col px-2 md:px-0 md:w-[300px] mt-4 md:mt-0">
            <div className="border-b border-gray-700 pt-4 flex justify-between items-center">
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
        </div>
      ) : (
        <p className="text-center text-gray-400">Your cart is empty</p>
      )}
    </div>
  );
}
