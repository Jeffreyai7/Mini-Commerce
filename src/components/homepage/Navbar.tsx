'use client';
import React from 'react';
import { Menu, ShoppingCartIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useCartStore, useNavbarStore } from '@/store';
import { navLinks } from '@/lib/constants';
import Image from 'next/image';
import DarkModeToggle from '../global/DarkModeToggle';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useNavbarStore();
  const { items } = useCartStore();

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-background text-foreground shadow-md transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="w-[50px]">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={24}
            height={24}
            className="relative z-50 w-full rounded-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/cart" className="relative flex items-center gap-1">
            <ShoppingCartIcon size={20} />
            <span className="absolute -top-2 left-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {items.length}
            </span>
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <div className="hidden items-center space-x-2 md:flex">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="z-50 flex items-center justify-center md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-[72px] z-40 flex flex-col items-start space-y-4 bg-background px-4 py-6 shadow-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block w-full py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4 flex w-full flex-col gap-3">
            <Link
              href="/login"
              onClick={toggleMenu}
              className="w-full rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              onClick={toggleMenu}
              className="w-full rounded-md border border-primary px-5 py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
