import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4 rounded-xl border border-border bg-card p-4 shadow-sm">
      {/* Image Placeholder */}
      <Skeleton className="h-[205px] w-full rounded-lg bg-muted" />

      {/* Title + Price Placeholder */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-[80%] rounded bg-muted" />
        <Skeleton className="h-6 w-[60%] rounded bg-muted" />
      </div>
    </div>
  );
}
