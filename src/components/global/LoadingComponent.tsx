'use client';

import { FaSpinner } from 'react-icons/fa'; // Font Awesome spinner

const LoadingComponent = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <FaSpinner className="animate-spin text-4xl text-primary" />
        <span className="text-lg font-medium">Loading, please wait...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
