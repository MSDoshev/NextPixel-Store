import { useFilter } from "@/context/FilterContext";
import Checkbox from "../ui/Checkbox";

export default function StoreSidebar() {
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
    console.log("Checkbox changed:", event.target); 
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value),
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
    <div className="w-[25%] bg-stone-100 pt-10">
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
