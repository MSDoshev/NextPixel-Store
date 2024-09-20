"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = () => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  };

  useEffect(() => {
    fetchCartItems();

    const handleCartUpdate = () => {
      fetchCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="relative group">
      <button className="hover:text-sky-500 flex items-center">
        Cart ({totalItems})
      </button>
      <div className="absolute hidden group-hover:block bg-gray-800 text-white shadow-lg p-4 w-[300px] z-10 rounded-md">
        {cartItems.length > 0 ? (
          <div className="max-h-72 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b border-gray-600"
              >
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
        <Link
          href="/checkout"
          className="block text-center mt-4 bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition duration-200"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
