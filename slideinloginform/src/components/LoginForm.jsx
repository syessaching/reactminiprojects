import React from "react";

function LoginForm(){
    return(


        <div className = "ww-[768px] h-[480px] bg-white rounded-lg shadow-lg flex">
            <div className="w-1/2 flex flex-col justify-center items-center px-10">
                <h2 className="text-2xl font-bold mb-4">Sign in</h2>
                <input 
                    type= "email"
                    placeholder="Email"
                    className="border border-gray-300 rounded w-full px-4 py-2 mb-3"
                />
                <input 
                    type = "password"
                    placeholder="Password"
                    className="border border-gray-300 rounded w-full px-4 py-2 mb-4"
                />
                
            
            </div>

       
        </div>

    );
}
export default LoginForm