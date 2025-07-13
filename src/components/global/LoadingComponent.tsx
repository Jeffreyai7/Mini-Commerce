'use client';
import { FaSpinner } from 'react-icons/fa'; // Font Awesome spinner

const LoadingComponent = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="text-lg font-medium">Loading, please wait...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
