import Navigation from "./Navigation";

function About() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-darkViolet my-3 font-semibold">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row">
          <img src="" alt="../../public/Mirwais.JPG" />
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
