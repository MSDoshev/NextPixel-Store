export default function BrowsePage() {
  const games = [
    {
      id: 1,
      title: "Game 1",
      price: "$59.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 2,
      title: "Game 2",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 3,
      title: "Game 3",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 4,
      title: "Game 4",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 5,
      title: "Game 5",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 6,
      title: "Game 6",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 7,
      title: "Game 7",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
  ];

  return (
    <div className="flex flex-row">
      <div className="w-[20%] pl-10 bg-stone-100 pt-10">
        <h3 className="font-bold text-xl">Categories</h3>
        <ul className="flex flex-col gap-2 mt-5 w-[70%] ">
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
          <li className="p-2 hover:text-blue-500 hover:bg-stone-200">
            Some link
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="flex justify-center items-center font-bold text-6xl pt-10">
          Pixel Store
        </h1>

        <div className="flex justify-center items-center p-5 w-full">
          <ul className="flex flex-wrap gap-5 justify-start items-start max-w-[1280px]">
            {games.map((game) => (
              <li
                key={game.id}
                className="flex flex-col w-[240px] h-[420px] rounded-lg items-center pt-5 pb-5 hover:border-stone-400 hover:border-[1px] hover:shadow-md shadow-black"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-fit h-[240px] rounded-lg object-cover"
                />
                <div className="mt-4 flex flex-col flex-grow justify-between text-center">
                  <h2 className="text-white font-bold text-xl">{game.title}</h2>
                  <p className="text-yellow-400 text-lg">{game.price}</p>
                  <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                    Buy Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
