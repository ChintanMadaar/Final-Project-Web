"use client";
import React, { useState } from "react";

export default function LoginForm({ onSubmit, onGoogleSignIn, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-red-600 max-w-md w-full">
        <h1 className="text-4xl font-semibold text-red-600">
          Login to FitFusion
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-lg font-medium text-red-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-red-300 rounded-xl p-4 mt-1 bg-transparent text-red-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium text-red-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-red-300 rounded-xl p-4 mt-1 bg-transparent text-red-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 font-medium text-base text-red-600"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
            <button className="text-base font-medium text-red-600 hover:underline transition-all">
              Forgot password?
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-red-600 text-white text-lg font-bold"
            >
              Sign In
            </button>
            <button
              type="button"
              className="flex text-black border-2 border-red-300 rounded-xl py-3 items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
              onClick={onGoogleSignIn}
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="Google logo"
              />
              Sign in with Google
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-600 text-sm mt-4">{errorMessage}</p>
          )}
        </form>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base text-red-600">
            Don't have an account?
          </p>
          <button className="text-red-600 text-base font-medium ml-2 hover:underline transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
