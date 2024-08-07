export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition duration-300"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
