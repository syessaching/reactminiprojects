import React, { useState } from "react";

function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-2xl relative overflow-hidden w-full max-w-4xl min-h-[500px]">
        
        {/* Sign Up Container */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out left-0 opacity-0 z-[1] ${
          !isSignIn ? "transform translate-x-full opacity-100 z-[5]" : ""
        }`}>
          <div className="bg-white h-full flex items-center justify-center flex-col p-12 text-center">
            <h1 className="font-bold text-3xl mb-6">Create Account</h1>
            <div className="w-full max-w-xs">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 border-none p-3 my-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 border-none p-3 my-2 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-100 border-none p-3 my-2 w-full"
              />
              <button className="rounded-3xl border border-red-400 bg-red-400 text-white text-xs font-bold py-3 px-12 uppercase tracking-wider mt-4 transition-transform focus:outline-none active:scale-95">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Sign In Container */}
           <div className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out left-0 z-[2] ${
                !isSignIn ? "transform translate-x-full" : ""
                }`}>
                <div className="bg-white h-full flex items-center justify-center flex-col p-12 text-center">
                    <h1 className="font-bold text-3xl mb-6">Sign in</h1>
                    <div className="w-full max-w-xs">
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-gray-100 border-none p-3 my-2 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-gray-100 border-none p-3 my-2 w-full"
                    />
                    
                    {/* SIGN IN button with Forgot password link below it */}
                    <button className="w-full rounded-3xl border border-red-400 bg-red-400 text-white text-xs font-bold py-3 px-12 uppercase tracking-wider mt-4 transition-transform focus:outline-none active:scale-95">
                        SIGN IN
                    </button>
                    <a href="#" className="text-gray-500 text-sm no-underline hover:underline block text-center mt-2">
                        Forgot your password?
                    </a>
                    </div>
                </div>
                </div>
            {/* Overlay Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-[100] ${
          !isSignIn ? "transform -translate-x-full" : ""
        }`}>
          {/* Overlay */}
          <div className={`bg-gradient-to-r from-red-500 to-pink-500 text-white relative -left-full h-full w-[200%] transition-transform duration-600 ease-in-out ${
            !isSignIn ? "transform translate-x-1/2" : ""
          }`}>
            {/* Left Overlay Panel */}
            <div className={`absolute flex items-center justify-center flex-col p-12 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out -translate-x-1/5 ${
              !isSignIn ? "transform translate-x-0" : ""
            }`}>
              <h1 className="font-bold text-3xl mb-6">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wider my-6">
                To keep connected with us please login with your personal info
              </p>
              <button 
                onClick={() => setIsSignIn(true)}
                className="rounded-3xl border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase tracking-wider mt-4 transition-transform focus:outline-none active:scale-95">
                Sign In
              </button>
            </div>

            {/* Right Overlay Panel */}
            <div className={`absolute flex items-center justify-center flex-col p-12 text-center top-0 h-full w-1/2 right-0 transition-transform duration-600 ease-in-out ${
              !isSignIn ? "transform translate-x-1/5" : ""
            }`}>
              <h1 className="font-bold text-3xl mb-6">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wider my-6">
                Enter Your personal details and start journey with us
              </p>
              <button 
                onClick={() => setIsSignIn(false)}
                className="rounded-3xl border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase tracking-wider mt-4 transition-transform focus:outline-none active:scale-95">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;