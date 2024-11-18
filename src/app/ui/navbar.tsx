import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-8 border-b border-gray-700 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo/Roundhouse_World_Logo.webp"
            alt="Roundhouse World Logo"
            width={60} // Adjust width to your preference
            height={60} // Adjust height to your preference
            priority // Ensures the logo is loaded immediately
            className="rounded-full" // Optional styling, e.g., rounded for a circular logo
          />
          <h1 className="text-3xl font-bold">Roundhouse World</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/gear" className="hover:text-gray-400">Gear Reviews</Link>
            </li>
            <li>
              <Link href="/training" className="hover:text-gray-400">Training Tips</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
