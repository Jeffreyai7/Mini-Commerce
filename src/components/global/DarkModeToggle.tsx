'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="rounded px-3 py-2 text-gray-900 transition hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
    >
      {resolvedTheme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
