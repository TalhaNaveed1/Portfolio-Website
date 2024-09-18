export default function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <nav className="flex space-x-8 text-white font-semibold mt-5">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Education
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </div>
  );
}
