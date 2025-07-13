import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 px-4 text-center dark:bg-gray-900">
      <FaExclamationTriangle className="mb-4 text-6xl text-red-500" />
      <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded bg-blue-600 px-6 py-2 font-medium text-white transition duration-300 hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
