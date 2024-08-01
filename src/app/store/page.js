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
      title: "Game 2",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 4,
      title: "Game 2",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 5,
      title: "Game 2",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 6,
      title: "Game 2",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
    {
      id: 7,
      title: "Game 2",
      price: "$49.99",
      image: "/images/home/cover.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <h1 className="flex flex-col justify-center items-center pt-24 font-bold text-6xl">
        Pixel Store
      </h1>

      <div className="flex justify-center items-center gap-5 p-5 max-w-1360">
        <ul className="flex flex-wrap gap-5 justify-start items-start list-none max-w-[1360px] pl-[120px] pr-[120px] pb-10">
          {games.map((game) => (
            <li
              key={game.id}
              className="flex flex-col bg-gray-800 w-[300px] h-[360px] rounded-lg p-5"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-[180px] rounded-lg object-cover"
              />
              <div className="mt-4 flex flex-col flex-grow justify-between">
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
  );
}
