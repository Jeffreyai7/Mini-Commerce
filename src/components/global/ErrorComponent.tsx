'use client';

import { BiErrorCircle } from 'react-icons/bi';
import React from 'react';

const ErrorComponent = () => {
  return (
    <div className="bg-background text-foreground flex h-[50vh] w-full items-center justify-center">
      <div className="text-destructive flex flex-col items-center gap-3">
        <BiErrorCircle className="text-5xl" />
        <h2 className="text-xl font-semibold">Oops! Something went wrong.</h2>
        <p className="text-muted-foreground text-center text-sm">
          We're having trouble loading the content. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
