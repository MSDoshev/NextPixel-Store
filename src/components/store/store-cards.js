"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFilter } from "@/context/FilterContext";

export default function StoreCards({ className }) {
  const { filters } = useFilter();
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("/api/games");
      const allGames = await response.json();

      console.log("Filters:", filters);

      const filteredGames = allGames.filter((game) => {
        const isSearchMatch = filters.searchQuery
          ? game.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
          : true;

        const isGenreMatch =
          filters.genres.length === 0 || filters.genres.includes(game.genre);

        const isPlatformMatch =
          filters.platforms.length === 0 ||
          filters.platforms.includes(game.platform);

        const isPriceMatch =
          game.price >= filters.priceRange[0] &&
          game.price <= filters.priceRange[1];

        return isSearchMatch && isGenreMatch && isPlatformMatch && isPriceMatch;
      });

      setGames(filteredGames);
    };

    fetchGames();
  }, [filters]);

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

  const handleClick = (gameId) => {
    router.push(`/store/${gameId}`);
  };

  return (
    <ul className={`flex flex-col ${className}`}>
      {games.map((game) => (
        <li
          key={game._id}
          onClick={() => handleClick(game._id)}
          className="relative flex flex-row gap-4 bg-white border overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:z-10"
        >
          <img
            src={game.image}
            alt={game.title}
            className="w-fit p-2 h-[180px] object-cover justify-center"
          />
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl font-semibold text-gray-800 pt-2">
              {game.title}
            </h2>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Genre: </span>
              {game.genre}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Release Date: </span>
              {game.releaseDate}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Platform: </span>
              {game.platform}
            </p>
            <div className="mt-auto flex flex-col items-end m-4">
              <p className="text-lg font-medium text-gray-900">${game.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(game);
                }}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
