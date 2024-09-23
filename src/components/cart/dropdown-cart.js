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
    <div className="relative group ">
      <button className="hover:text-sky-500 flex items-center">
        Cart ({totalItems})
      </button>

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
  );
}
