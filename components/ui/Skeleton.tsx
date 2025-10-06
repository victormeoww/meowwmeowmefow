/**
 * SKELETON COMPONENT
 * 
 * Loading placeholder
 */

import { clsx } from 'clsx'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rect' | 'circle'
}

export function Skeleton({ className, variant = 'text' }: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-dark-bg-tertiary'
  
  const variantClasses = {
    text: 'h-4 rounded',
    rect: 'rounded-md',
    circle: 'rounded-full'
  }
  
  return (
    <div className={clsx(baseClasses, variantClasses[variant], className)} />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-dark-bg-secondary border border-gray-200 dark:border-dark-border-light rounded-lg p-6">
      <Skeleton className="w-3/4 mb-4" />
      <Skeleton className="w-full mb-2" />
      <Skeleton className="w-full mb-2" />
      <Skeleton className="w-2/3" />
    </div>
  )
}

export function SkeletonInfobox() {
  return (
    <div className="bg-white dark:bg-dark-bg-secondary border border-gray-200 dark:border-dark-border-light rounded-lg overflow-hidden">
      <Skeleton variant="rect" className="w-full aspect-square" />
      <div className="p-4 space-y-3">
        <Skeleton className="w-1/2" />
        <Skeleton className="w-full" />
        <Skeleton className="w-3/4" />
        <Skeleton className="w-full" />
      </div>
    </div>
  )
}


