export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white h-80 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to NextPixel</h1>
        <p className="text-xl mb-6">Explore the latest and greatest video games all in one place.</p>
        <a href="/shop" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300">Shop Now</a>
      </div>

      {/* Featured Games Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/home/cover.jpg" alt="Game 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Game Title 1</h3>
                <p className="text-gray-600 mb-4">$59.99</p>
                <a href="/game/1" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Add to Cart</a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/home/cover.jpg" alt="Game 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Game Title 2</h3>
                <p className="text-gray-600 mb-4">$49.99</p>
                <a href="/game/2" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Add to Cart</a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/home/cover.jpg" alt="Game 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Game Title 3</h3>
                <p className="text-gray-600 mb-4">$39.99</p>
                <a href="/game/3" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-200 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center w-64">
              <h3 className="text-xl font-semibold mb-4">Action</h3>
              <p className="text-gray-600">Explore thrilling action games with high-octane excitement.</p>
              <a href="/category/action" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Explore</a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center w-64">
              <h3 className="text-xl font-semibold mb-4">Adventure</h3>
              <p className="text-gray-600">Embark on epic quests and discover new worlds.</p>
              <a href="/category/adventure" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Explore</a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center w-64">
              <h3 className="text-xl font-semibold mb-4">RPG</h3>
              <p className="text-gray-600">Dive into rich stories and character development.</p>
              <a href="/category/rpg" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Explore</a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center w-64">
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-gray-600">Test your tactical skills with challenging strategy games.</p>
              <a href="/category/strategy" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Explore</a>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-12 px-4 md:px-8 bg-blue-500 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Special Promotion</h2>
          <p className="text-lg mb-6">Get 20% off your first purchase with code <span className="font-bold">WELCOME20</span>!</p>
          <a href="/shop" className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">Shop Now</a>
        </div>
      </section>
    </div>
  );
}
