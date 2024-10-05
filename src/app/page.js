import Image from "next/image";

export default function Home() {
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
        <h1 className="text-5xl font-bold mb-4">Welcome to NextPixel</h1>
        <p className="text-xl mb-6">
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
            <ul className="flex flex-row">
              <div className="max-w-xs mx-auto bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src="/images/home/cover.jpg"
                    alt="Game Cover"
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-xs font-bold py-1 px-2 rounded-md">
                    Sale
                  </span>
                </div>

                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">Cyber Fantasy</h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-md font-bold">$49.99</span>
                    <span className="line-through text-gray-400 text-sm">
                      $59.99
                    </span>
                  </div>

                  <button className="w-full bg-blue-500 py-1.5 rounded-md text-white font-medium text-sm hover:bg-blue-400 transition-colors duration-300">
                    Get Now
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
