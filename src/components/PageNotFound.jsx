import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="w-full mt-52 flex justify-center items-center">
      <div className="text-center space-y-7">
        <h1 className="text-6xl font-black">Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>

        <button className="bg-lightViolet px-8 py-2 rounded-xl ">
          <Link to={"/"}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
}
