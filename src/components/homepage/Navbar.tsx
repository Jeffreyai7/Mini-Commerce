'use client';
import React from 'react';
import { Menu, ShoppingBasket, X } from 'lucide-react';
import Link from 'next/link';
import { useCartStore, useNavbarStore } from '@/store';
import { navLinks } from '@/lib/constants';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useNavbarStore();
  const { items } = useCartStore();

  return (
    <header className="sticky top-0 right-0 left-0 z-50 bg-white py-2 shadow-md transition-all duration-300 dark:bg-gray-900 dark:shadow-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-20">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="relative z-50 w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-900 transition-colors hover:text-[#2B3089] dark:text-gray-500 dark:hover:text-[#1D9EE2]"
              >
                {link.name}
              </Link>
            ))}
            <div>
              <span className="">{items.length}</span>
              <ShoppingBasket />
            </div>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="login"
              className="font-medium text-gray-900 transition-colors hover:text-[#2B3089] dark:text-gray-200 dark:hover:text-[#1D9EE2]"
            >
              Log in
            </Link>
            <Link
              href="sign-up"
              className="rounded-lg bg-[#2B3089] px-5 py-2 font-medium text-white transition-colors duration-300 hover:bg-[#1D9EE2] dark:bg-[#1D9EE2] dark:hover:bg-[#2B3089]"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="relative z-50 text-gray-900 transition-all duration-300 ease-in-out md:hidden dark:text-gray-500"
            onClick={() => toggleMenu()}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 left-0 z-30 bg-white px-4 py-[30%] text-white shadow-lg transition-all duration-300 ease-in-out md:hidden dark:bg-gray-900 dark:shadow-gray-800">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-2 font-medium text-gray-900 transition-colors hover:text-[#2B3089] dark:text-gray-500 dark:hover:text-[#1D9EE2]"
                  onClick={() => toggleMenu()}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  href="login"
                  className="rounded-lg bg-[#2B3089] py-3 text-center font-medium text-white transition-colors hover:text-[#2B3089] dark:bg-[#1D9EE2] dark:text-gray-200 dark:hover:text-[#1D9EE2]"
                >
                  Log In
                </Link>
                <Link
                  href="sign-up"
                  className="rounded-lg bg-[#2B3089] px-5 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-[#1D9EE2] dark:bg-[#1D9EE2] dark:hover:bg-[#2B3089]"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

//   ? "bg-white dark:bg-gray-900 dark:shadow-gray-800 shadow-md py-3"
//   : "bg-transparent py-5"
