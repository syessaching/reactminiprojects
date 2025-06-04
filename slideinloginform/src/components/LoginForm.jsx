import React from "react";
import { useState} from "react";

function LoginForm() {

    const [isSignUp, setIsSignUp] = useState(false);

  return (

    
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="relative w-full max-w-5xl min-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
         {/* Sliding TRACK */}
        <div
        className={`flex w-[200%] transition-transform duration-700 ease-in-out 
            ${isSignUp ? "-translate-x-1/2" : "translate-x-0"}`}>
            
        
            <div className="w-1/2 flex flex-col justify-center items-center h-full p-8 bg-white">
            <h2 className="text-3xl font-bold mb-6">
                {isSignUp ? "Create Account" : "Log in"}
            </h2>

            <div className="w-full max-w-md flex flex-col gap-4">
                {isSignUp ? (
                <>
                    <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                    onClick={() => setIsSignUp(false)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded"
                    >
                    Register
                    </button>
                </>
                ) : (
                <>
                    <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                    onClick={() => console.log("Login clicked")}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-2 rounded"
                    >
                    Let's go!
                    </button>
                    <p className="mt-4 text-sm text-blue-500 hover:underline cursor-pointer">
                    Forgot your password?
                    </p>
                </>
                )}
            </div>
            </div>



        <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-gradient-to-r from-pink-500 to-red-500 text-white ">
            <div className="w-full max-w-md flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6">Hello Friend!</h2>
                <p className = "mb-6">
                    Enter your details, and start the journey with us!
                </p>
                <button 
                    onClick={() => setIsSignUp(true)}
                    className="bg-fuchsia-300 hover:bg-blue-500 text-white font-semibold  py-2 rounded w-full">
                    Sign Up!
                </button>
            </div>
    
        </div>

        </div>


      </div>
    </div>
  );
}

export default LoginForm;
