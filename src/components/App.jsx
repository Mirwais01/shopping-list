import { useState } from "react";
import "../App.css";

export default function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Nav() {
  const [menu, setMenu] = useState(false);

  function handleMenuClick() {
    setMenu((menu) => !menu);
  }

  return (
    <div className="container mx-auto relative">
      <nav className="flex justify-between items-center md:px-12 px-6 md:py-8 py-5">
        <h1 className="text-2xl font-bold text-darkViolet">Shopping List</h1>
        {/* desctop menu  */}
        <ul className="hidden md:flex gap-9 text-darkViolet md:text-lg">
          <li className="group cursor-pointer ">
            <span className="group-hover:text-lightViolet">Home</span>
            <div className="group-hover:border-b-2 group-hover:border-b-lightViolet mx-2"></div>
          </li>
          <li className="group cursor-pointer ">
            <span className="group-hover:text-lightViolet">About</span>
            <div className="group-hover:border-b-2 group-hover:border-b-lightViolet mx-2"></div>
          </li>
          <li className="group cursor-pointer ">
            <span className="group-hover:text-lightViolet">Contact</span>
            <div className="group-hover:border-b-2 group-hover:border-b-lightViolet mx-2"></div>
          </li>
          <div className="border-r-2 border-r-darkViolet my-1"></div>
          <li className="px-5 bg-darkViolet text-white hover:bg-lightViolet rounded-full">
            Login
          </li>
        </ul>

        {/* humberger btn */}
        <div
          onClick={handleMenuClick}
          className={`md:hidden hamburger pt-1 ${menu ? "open" : ""}`}
        >
          <button className="hamburger-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {/* mobile menu */}
      <div
        className={` ${
          menu ? "" : "hidden"
        } absolute top-20 left-6 right-6 bg-lightAntique rounded-lg`}
      >
        <ul className="flex flex-col text-darkViolet text-center space-y-5 p-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="border-t-2 border-t-white mx-5"></div>
        <div className="mx-7 mt-5 pb-5">
          <button className="text-lg w-full font-bold text-lightAntique bg-darkViolet py-2 rounded-3xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
