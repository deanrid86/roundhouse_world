import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CubeIcon, HomeIcon, MegaphoneIcon, SunIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-8 border-b border-gray-700 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo/Roundhouse_World_Logo.webp"
            alt="Roundhouse World Logo"
            width={60}
            height={60}
            priority
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">Roundhouse World</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400 text-2xl font-semibold">Home</Link>
            </li>
            <li>
              <Link href="/gear" className="hover:text-gray-400 text-2xl font-semibold">Gear Reviews</Link>
            </li>
            <li>
              <Link href="/training" className="hover:text-gray-400 text-2xl font-semibold">Training Tips</Link>
            </li>
            <li>
              <Link href="/fitness" className="hover:text-gray-400 text-2xl font-semibold">Fitness</Link>
            </li>
            <li>
              <Link href="/nutrition" className="hover:text-gray-400 text-2xl font-semibold">Nutrition</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 text-2xl font-semibold">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black md:hidden border-t border-gray-700">
      <ul className="flex justify-around items-center text-center py-2">
        <li>
          <Link href="/" className="text-sm text-white hover:text-gray-400 flex flex-col items-center">
            <HomeIcon className="w-6 h-6" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/gear" className="text-sm text-white hover:text-gray-400 flex flex-col items-center">
            <CubeIcon className="w-6 h-6" />
            <span>Gear</span>
          </Link>
        </li>
        <li>
          <Link href="/training" className="text-sm text-white hover:text-gray-400 flex flex-col items-center">
            <TrophyIcon className="w-6 h-6" />
            <span>Training</span>
          </Link>
        </li>
        <li>
          <Link href="/fitness" className="text-sm text-white hover:text-gray-400 flex flex-col items-center">
            <TrophyIcon className="w-6 h-6" />
            <span>Fitness</span>
          </Link>
        </li>
        <li>
          <Link href="/nutrition" className="text-sm text-white hover:text-gray-400 flex flex-col items-center">
            <SunIcon className="w-6 h-6" />
            <span>Nutrition</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-sm text-white hover:text-gray-400 flex flex-col items-center">
            <MegaphoneIcon className="w-6 h-6" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
