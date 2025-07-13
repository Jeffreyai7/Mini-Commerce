'use client';

import { FaSpinner } from 'react-icons/fa'; // Font Awesome spinner

const LoadingComponent = () => {
  return (
    <div className="bg-background text-foreground flex h-[50vh] w-full items-center justify-center">
      <div className="text-muted-foreground flex flex-col items-center gap-2">
        <FaSpinner className="text-primary animate-spin text-4xl" />
        <span className="text-lg font-medium">Loading, please wait...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
