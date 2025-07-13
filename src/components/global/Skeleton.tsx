import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="border-border bg-card flex flex-col space-y-4 rounded-xl border p-4 shadow-sm">
      {/* Image Placeholder */}
      <Skeleton className="bg-muted h-[205px] w-full rounded-lg" />

      {/* Title + Price Placeholder */}
      <div className="space-y-3">
        <Skeleton className="bg-muted h-6 w-[80%] rounded" />
        <Skeleton className="bg-muted h-6 w-[60%] rounded" />
      </div>
    </div>
  );
}
