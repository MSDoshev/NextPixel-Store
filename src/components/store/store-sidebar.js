import Checkbox from "../ui/Checkbox";

export default function StoreSidebar() {
  // Alphabetical list of game genres
  const genres = [
    "Action",
    "Adventure",
    "Casual",
    "Indie",
    "MMO",
    "RPG",
    "Simulation",
    "Sports",
    "Strategy",
  ];

  const platforms = ["Steam", "Xbox", "Nintendo", "PlayStation"];

  return (
    <div className="w-[25%] bg-stone-100 pt-10">
      <div className="pl-[20px]">
        <h3 className="font-bold text-xl mb-4">Categories</h3>
        <form className="space-y-3">
          {genres.map((genre) => (
            <Checkbox key={genre} id={genre.toLowerCase()} name="genre" value={genre}>
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
          />
          <span>-</span>
          <input
            type="number"
            className="w-[30%] h-[30px] pl-2"
            placeholder="To"
          />
        </div>
      </form>

      <form className="pl-[20px] pt-6">
        <h3 className="font-bold text-xl mb-4">Platform</h3>
        <div className="flex flex-col space-y-3">
          {platforms.map((platform) => (
            <Checkbox key={platform} id={platform.toLowerCase()} name="platform" value={platform}>
              {platform}
            </Checkbox>
          ))}
        </div>
      </form>
    </div>
  );
}
