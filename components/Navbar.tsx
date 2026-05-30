import Link from 'next/link';
import { navigationItems } from '@/lib/site-navigation';

const Navbar = () => (
  <nav className="bg-gray-800 text-white py-4">
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-4">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:text-blue-400">{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
