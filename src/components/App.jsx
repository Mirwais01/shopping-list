import "../App.css";

export default function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Nav() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center px-12 py-8">
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
        </ul>

        {/* humberger btn */}
        <div className="hamburger">
          <button className="hamburger-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
