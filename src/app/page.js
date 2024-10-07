"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const router = useRouter(); 

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("/api/games");
      const data = await response.json();
      const randomGames = data.sort(() => 0.5 - Math.random()).slice(0, 10);
      setFeaturedGames(randomGames);
    };

    fetchGames();
  }, []);

  return (
    <div className="relative flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/home/background2.jpeg')",
          height: "600px",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

      <div className="relative z-20 text-white flex flex-col items-center justify-center h-[600px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to NextPixel</h1>
        <p className="md:text-xl mb-6 hidden md:block">
          Explore the latest and greatest video games all in one place.
        </p>
        <a
          href="/store"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300"
        >
          Shop Now
        </a>
        <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-b from-transparent to-gray-800 backdrop-blur-sm"></div>
      </div>

      <section className="relative z-20">
        <div className="relative z-20 py-12 px-4 md:px-8 bg-gray-800">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Featured Games
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-dark scrollbar-track-gray-900 py-4">
              {featuredGames.map((game) => (
                <div
                  key={game._id}
                  className="flex-shrink-0 w-64 bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 mx-2 flex flex-col"
                >
                  <div className="relative flex-grow">
                    <img
                      src={game.image}
                      alt={`${game.title} Cover`}
                      className="w-full h-48 object-cover"
                    />
                    {game.onSale && (
                      <span className="absolute top-2 right-2 bg-red-500 text-xs font-bold py-1 px-2 rounded-md">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-md font-bold">${game.price}</span>
                      {game.originalPrice && (
                        <span className="line-through text-gray-400 text-sm">
                          ${game.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => router.push(`/store/${game._id}`)} 
                      className="w-full bg-blue-500 py-2 rounded-md text-white font-medium text-sm hover:bg-blue-400 transition-colors duration-300"
                    >
                      Get Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
