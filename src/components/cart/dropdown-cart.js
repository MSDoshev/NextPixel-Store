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
      {/* Cart Button */}
      <button className="hover:text-sky-500 flex items-center font-semibold text-lg">
        Cart ({totalItems})
      </button>

      {/* Cart Dropdown */}
      <div className="absolute hidden group-hover:block bg-gray-800 text-white shadow-lg p-4 w-[350px] z-50 rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-100">
        {cartItems.length > 0 ? (
          <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-dark">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3 px-2 bg-gray-700 hover:bg-gray-600 rounded-md mb-2 transition duration-200"
              >
                {/* Image */}
                <img
                  src={item.image}
                  className="h-[60px] w-[45px] object-cover rounded-md"
                  alt={item.name}
                />
                {/* Details */}
                <div className="flex-1 mx-4">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">${item.price} x {item.quantity}</p>
                </div>
                {/* Total */}
                <p className="text-sm font-semibold text-sky-500">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Your cart is empty</p>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <Link
            href="/checkout"
            className="block text-center mt-4 bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition duration-200"
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
