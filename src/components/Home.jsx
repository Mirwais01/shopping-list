import Footer from "./Footer";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navigation />
      {/* first section  */}
      <FirstSection />
      <SecondSection />
      <Footer />
    </div>
  );
}

export default Home;

function FirstSection() {
  return (
    <section>
      <div className="container mx-auto py-12 md:px-12 px-7">
        <div className="flex flex-col md:flex-row md:items-center justify-around">
          <div className="md:w-1/2 md:order-2">
            <img src="SEO-Checklist.png" alt="" />
          </div>

          <div className="md:order-1 relative md:flex-1 space-y-8 text-center md:text-left md:mb-32">
            <h1 className="md:text-6xl text-3xl font-black md:max-w-lg">
              Welcome to Shopping List app
            </h1>
            <p className="opacity-75">
              You can save your notes and items savely and clearly.
            </p>
            <div className="w-10 h-10 absolute left-40 md:bottom-8 bottom-10 -rotate-12 ">
              <img src="./arrow-icon.svg" alt="" />
            </div>
            <Link
              className="bg-lightAntique inline-block border border-[#f9d360] rounded-full px-12 py-3 hover:bg-[#fcdd83]"
              to={"/CreateList"}
            >
              Create List
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondSection() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 md:my-0 pb-16 my-12">
        <div className="md:col-span-2">
          <img src="./section2.png" alt="" />
        </div>
        <div className="md:col-span-2 md:px-0 px-5 md:ms-7 flex flex-col justify-center mb-12 space-y-6">
          <h2 className="text-4xl font-bold text-center md:text-left mt-12 md:mt-0">
            Information
          </h2>
          <p className="opacity-75">
            This website allows you to easily create your shopping list either
            you can share your list with anyone you like,in single click. All
            the features are free
          </p>
        </div>
      </div>
    </section>
  );
}
