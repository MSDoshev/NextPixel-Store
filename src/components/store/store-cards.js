import { DUMMY_GAMES } from "../../../dummy-data";

export default function StoreCards() {
  return (
    <ul className="flex flex-wrap gap-5 justify-start items-start max-w-[1280px]">
      {DUMMY_GAMES.map((game) => (
        <li
          key={game.id}
          className="flex flex-col bg-stone-200 w-[240px] h-[420px] rounded-lg items-center pt-5 pb-5 hover:border-stone-400 hover:border-[1px] hover:shadow-md shadow-black"
        >
          <img
            src={game.image}
            alt={game.title}
            className="w-fit h-[240px] rounded-lg object-cover"
          />
          <div className="mt-4 flex flex-col flex-grow justify-between text-center">
            <h2 className="text-black font-bold text-xl">{game.title}</h2>
            <p className="text-stone-600">{game.genre.join(", ")}</p>
            <p className="text-stone-900 text-lg">{game.price}</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
