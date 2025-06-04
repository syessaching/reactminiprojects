import React from "react";

function LoginForm() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        <div className="w-full md:w-1/2 flex flex-col justify-between items-center h-full p-8">
          <h2 className="text-3xl font-bold mb-6 p-8">Sign in</h2>

          <div className="w-full max-w-md flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded w-full max-w-md px-8 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded w-full max-w-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded w-full max-w-md">
            Sign In
          </button>
        </div>
        <p className="mt-4 text-sm text-blue-500 hover:underline cursor-pointer">
            Forgot your password?
        </p>
          
        </div>

        {/* Placeholder for Step 3C */}
        <div className="hidden md:block md:w-1/2 bg-gray-100"></div>
      </div>
    </div>
  );
}

export default LoginForm;
