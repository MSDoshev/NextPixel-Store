"use client";

import { useFilter } from "@/context/FilterContext";
import Checkbox from "../ui/Checkbox";
import { FaTimes } from "react-icons/fa";

export default function StoreSidebar({ onClose }) {
  const { filters, setFilters } = useFilter();

  const genres = [
    "Action",
    "Adventure",
    "Battle Royale",
    "Card Game",
    "Platformer",
    "Puzzle",
    "RPG",
    "Roguelike",
    "Shooter",
    "Simulation",
    "Sandbox",
    "Sports",
    "Strategy",
    "Survival",
    "Party",
  ];

  const platforms = ["Steam", "Xbox", "Nintendo", "PlayStation", "PC"];

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value),
    }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: value,
    }));
  };

  const handlePriceChange = (e) => {
    const { value, placeholder } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange:
        placeholder === "From"
          ? [parseFloat(value) || 0, prevFilters.priceRange[1]]
          : [prevFilters.priceRange[0], parseFloat(value) || Infinity],
    }));
  };

  return (
    <div className="bg-stone-100 py-10 h-full overflow-y-auto relative">
      <button
        className="lg:hidden absolute right-4 p-2 text-xl text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={onClose}
      >
        <FaTimes />
      </button>
      <div className="px-[20px]">
        <h3 className="font-bold text-xl mb-4">Search</h3>
        <input
          type="text"
          placeholder="Search games"
          value={filters.searchQuery}
          onChange={handleSearchChange}
          className="w-full h-[30px] pl-2 mb-6"
        />
      </div>
      <div className="pl-[20px]">
        <h3 className="font-bold text-xl mb-4">Categories</h3>
        <form className="space-y-3">
          {genres.map((genre) => (
            <Checkbox
              key={genre}
              id={genre.toLowerCase()}
              name="genres"
              value={genre}
              onChange={handleCheckboxChange}
              checked={filters.genres.includes(genre)}
            >
              {genre}
            </Checkbox>
          ))}
        </form>
      </div>

      <form className="pl-[20px] pt-[20px]">
        <h3 className="font-bold text-xl mb-4">Price</h3>
        <div className="flex flex-row gap-2">
          <input
            type="number"
            className="w-[30%] h-[30px] pl-2"
            placeholder="From"
            onChange={handlePriceChange}
          />
          <span>-</span>
          <input
            type="number"
            className="w-[30%] h-[30px] pl-2"
            placeholder="To"
            onChange={handlePriceChange}
          />
        </div>
      </form>

      <form className="pl-[20px] pt-6">
        <h3 className="font-bold text-xl mb-4">Platform</h3>
        <div className="flex flex-col space-y-3">
          {platforms.map((platform) => (
            <Checkbox
              key={platform}
              id={platform.toLowerCase()}
              name="platforms"
              value={platform}
              onChange={handleCheckboxChange}
              checked={filters.platforms.includes(platform)}
            >
              {platform}
            </Checkbox>
          ))}
        </div>
      </form>
    </div>
  );
}
