'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">TodoAI</Link>
      </div>

      {/* Links */}
      <div className="space-x-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
