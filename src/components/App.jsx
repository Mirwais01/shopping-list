export default function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
