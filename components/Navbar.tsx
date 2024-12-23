import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white py-4">
    <ul className="flex justify-center space-x-6">
      <li>
        <Link href="/" className="hover:text-blue-400">Home</Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-blue-400">About</Link>
      </li>
      <li>
        <Link href="/projects" className="hover:text-blue-400">Projects</Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
