import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center">
      <div className="flex m-auto">
        <img src="./Assets/header_logo.png" className="place-self-start" alt="logo" />
      </div>
      <div className="bg-slate-200 flex flex-col w-3/4 md:w-1/2 m-auto p-8 rounded-xl shadow-2xl">
        <p>Please enter your administrator login and password.</p>
        <input
          type="text"
          className="bg-white m-2 p-2 rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          className="bg-white m-2 p-2 rounded-lg"
          placeholder="password"
        />
        <div className="flex justify-end m-2">
          <button type="submit" className="bg-white py-2 px-4 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
