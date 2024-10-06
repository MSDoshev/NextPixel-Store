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

  return (
    <div className="relative group">
      <div className="md:hidden">
        <Link href="/checkout" className="hover:text-sky-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-1 hover:text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" />
          </svg>
          ({totalItems})
        </Link>
      </div>

      <div className="hidden md:block">
        <Link href="/checkout" className="hover:text-sky-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-1 hover:text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" />
          </svg>
          ({totalItems})
        </Link>

        <div className="absolute hidden group-hover:block bg-gray-800 text-white shadow-lg p-4 w-[350px] z-50 rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-100">
          {cartItems.length > 0 ? (
            <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-dark scrollbar-track-gray-700">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 px-2 bg-gray-700 hover:bg-gray-600 rounded-md mb-2 transition duration-200"
                >
                  <img
                    src={item.image}
                    className="h-[60px] w-[45px] object-cover rounded-md"
                    alt={item.name}
                  />
                  <div className="flex-1 mx-4">
                    <h3 className="text-md font-semibold">{item.name}</h3>
                    <p className="text-gray-400 text-sm">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-sm font-semibold text-sky-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 font-bold ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg border-t border-gray-600 pt-3 mt-2">
                <span>Total Price:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">Your cart is empty</p>
          )}

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
    </div>
  );
}
