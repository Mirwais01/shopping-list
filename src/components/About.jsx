import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function About() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto">
        <h1 className="text-4xl text-center text-darkViolet my-3 font-black">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 mt-12">
          <div className="md:order-2 mb-7 md:mb-0">
            <img
              style={{ borderRadius: "53% 47% 50% 50% / 55% 44% 56% 45% " }}
              className="w-2/3 md:w-1/3 h-[97%] mx-auto
          "
              src="Mirwais.JPG"
              alt=""
            />
          </div>
          <div className="flex flex-col md:order-1 space-y-5 mt-3 mx-auto mb-12">
            <h1 className="text-3xl font-semibold">
              Hello I'm <span className="text-darkViolet ">Mirwais Sanaie</span>
            </h1>
            <p className="text-gray-500 max-w-md">
              I'm stduying software engeeniring at Herat university and also
              this project is completly by my self
            </p>
            <div className="text-gray-500 space-y-3">
              <p>You can check my socials :</p>
              <div className="space-y-2">
                <p>
                  <span>LinkidIn : </span>
                  <span className="text-darkViolet font-bold">
                    Mirwais Sanaie
                  </span>
                </p>
                <p>
                  <span>Git hub : </span>
                  <span className="text-darkViolet font-bold">
                    <Link to="https://github.com/Mirwais01">
                      https://github.com/Mirwais01
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
