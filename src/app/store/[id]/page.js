"use client";

import Reviews from "@/components/store/store-reviews";
import { useEffect, useState } from "react";

export default function GameDetails({ params }) {
  const { id } = params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      if (!id) return;
      const response = await fetch(`/api/games/${id}`);
      const gameDetails = await response.json();
      setGame(gameDetails);
    };

    fetchGameDetails();
  }, [id]);

  const addToCart = (game) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === game._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: game._id,
        image: game.image,
        name: game.title,
        price: game.price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    const cartUpdatedEvent = new Event("cartUpdated");
    window.dispatchEvent(cartUpdatedEvent);
  };

  if (!game) return <div className="p-10 text-center text-gray-600">Loading...</div>;

  return (
    <div className="max-w-full p-8 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-auto rounded-t-lg object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{game.title}</h1>
              <div className="mt-4 space-y-3">
                <p className="text-lg font-semibold text-gray-800">
                  Price: <span className="text-green-500">${game.price}</span>
                </p>
                <p className="text-base text-gray-600">
                  Genre: <span className="font-medium">{game.genre}</span>
                </p>
                <p className="text-base text-gray-600">
                  Platform: <span className="font-medium">{game.platform}</span>
                </p>
                <p className="text-base text-gray-600">
                  Release Date: <span className="font-medium">{game.releaseDate}</span>
                </p>
              </div>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum felis nec purus aliquam, in ultrices neque vestibulum. Suspendisse potenti. Curabitur sed cursus quam, ac faucibus purus.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(game);
                }}
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition duration-200 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 px-6 p-3">
          <h2 className="text-2xl font-semibold text-gray-800">User Reviews</h2>
          <Reviews gameId={id} />
        </div>
      </div>
    </div>
  );
}
