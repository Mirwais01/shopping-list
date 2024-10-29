import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto py-12 md:px-12 px-7">
        <div className="flex flex-col md:flex-row md:items-center justify-around">
          <div className="md:w-1/2 md:order-2">
            <img src="SEO-Checklist.png" alt="" />
          </div>

          <div className="md:order-1 md:flex-1 space-y-6 text-center md:text-left md:mb-32">
            <h1 className="md:text-6xl text-3xl font-black md:max-w-lg">
              Welcome to Shopping List app
            </h1>
            <p className="opacity-75">
              You can save your notes and items savely and clearly.
            </p>

            <Link
              className="bg-lightAntique inline-block border border-[#f9d360] rounded-full px-12 py-3 hover:bg-[#fcdd83]"
              to={"/CreateList"}
            >
              Create List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
