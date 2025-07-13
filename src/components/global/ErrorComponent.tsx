'use client';

import { BiErrorCircle } from 'react-icons/bi'; // Error icon
import React from 'react';

const ErrorComponent = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-red-600 dark:text-red-400">
        <BiErrorCircle className="text-5xl" />
        <h2 className="text-xl font-semibold">Oops! Something went wrong.</h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          We're having trouble loading the content. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
