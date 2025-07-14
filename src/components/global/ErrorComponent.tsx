'use client';

import { BiErrorCircle } from 'react-icons/bi';
import React from 'react';

const ErrorComponent = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-3 text-destructive">
        <BiErrorCircle className="text-5xl" />
        <h2 className="text-xl font-semibold">Oops! Something went wrong.</h2>
        <p className="text-center text-sm text-muted-foreground">
          We are having trouble loading the content. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
