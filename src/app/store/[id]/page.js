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

  if (!game) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row p-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="w-full md:w-1/2 h-auto rounded-lg object-cover"
      />
      <div className="md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
        <h1 className="text-5xl font-bold text-gray-900">{game.title}</h1>
        <div className="mt-4 space-y-2">
          <p className="text-xl font-semibold">
            Price: <span className="text-green-600">${game.price}</span>
          </p>
          <p className="text-lg text-gray-700">
            Genre: <span className="font-medium">{game.genre}</span>
          </p>
          <p className="text-lg text-gray-700">
            Platform: <span className="font-medium">{game.platform}</span>
          </p>
          <p className="text-lg text-gray-700">
            Release Date:{" "}
            <span className="font-medium">{game.releaseDate}</span>
          </p>
        </div>
        <p className="mt-4 text-gray-800 text-lg">{game.description}</p>
        <div className="mt-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(game);
            }}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200 ease-in-out shadow-md transform hover:scale-105"
          >
            Add to Cart
          </button>

          <Reviews gameId={id} />
        </div>
      </div>
    </div>
  );
}
