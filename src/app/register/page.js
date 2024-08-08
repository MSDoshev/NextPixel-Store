export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-stone-600 p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Register
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ivan Ivanov"
            className="w-full p-3  border-b border-stone-300 bg-stone-600 text-white focus:outline-none focus:border-sky-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full p-3  border-b border-stone-300 bg-stone-600 text-white focus:outline-none focus:border-sky-600"
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
            className="w-full p-3  border-b border-stone-300 bg-stone-600 text-white focus:outline-none focus:border-sky-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block text-white mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
            className="w-full p-3  border-b border-stone-300 bg-stone-600 text-white focus:outline-none focus:border-sky-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition duration-300"
        >
          Register
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
