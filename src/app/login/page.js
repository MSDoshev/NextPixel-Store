"use client";

import { useFormState } from "react-dom";
import { login } from "../../../actions/auth-actions";

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, {});
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={formAction}
        className="bg-stone-600 p-10 rounded-lg shadow-lg w-full max-w-sm"
      >
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
        {formState.errors && (
          <ul>
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>
        )}
        <button
          type="submit"
          className="w-full bg-sky-600 text-white p-3 rounded-lg font-bold hover:bg-sky-500 transition duration-300"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
