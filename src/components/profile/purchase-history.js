import { DUMMY_GAMES } from "../../../dummy-data";
import StoreCards from "../store/store-cards";

export default function PurchaseHistory() {
  return (
    <div className="p-10 w-[75%] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Purchase History
      </h1>

      {/* <ul className="flex flex-col">
        {DUMMY_GAMES.map((game) => (
          <li
            key={game.id}
            className="relative flex flex-row gap-4 bg-white border overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:z-10"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-fit p-2 h-[180px] object-cover justify-center"
            />
            <div className="flex flex-col flex-grow ">
              <h2 className="text-xl font-semibold text-gray-800 pt-2">
                {game.title}
              </h2>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Genre: </span>
                {game.genre.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Release Date: </span>
                {game.date}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Platform: </span>
                {game.platform}
              </p>
              <div className="mt-auto flex flex-col items-end m-4">
                <p className="text-lg font-medium text-gray-900">
                  {game.price}
                </p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
      <StoreCards className={"p-10 w-full max-w-4xl mx-auto"} />
    </div>
  );
}
