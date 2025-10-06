/**
 * INFOBOX BASE COMPONENT
 * 
 * Base Wikipedia-style infobox structure
 */

import { clsx } from 'clsx'

interface InfoboxProps {
  children: React.ReactNode
  className?: string
}

export function InfoboxBase({ children, className }: InfoboxProps) {
  return (
    <aside
      className={clsx(
        'sticky top-20 bg-white dark:bg-dark-bg-secondary border border-gray-200 dark:border-dark-border-light rounded-lg shadow-md overflow-hidden',
        'w-full lg:w-80',
        className
      )}
    >
      {children}
    </aside>
  )
}

export function InfoboxImage({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="aspect-square bg-gray-100 dark:bg-dark-bg-tertiary flex items-center justify-center">
        <svg className="w-20 h-20 text-gray-400 dark:text-dark-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  }
  
  return (
    <div className="aspect-square bg-gray-100 dark:bg-dark-bg-tertiary">
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export function InfoboxBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 space-y-3">
      {children}
    </div>
  )
}

export function InfoboxRow({ 
  label, 
  value, 
  className 
}: { 
  label: string
  value: React.ReactNode
  className?: string
}) {
  if (!value) return null
  
  return (
    <div className={clsx('flex flex-col gap-0.5', className)}>
      <span className="text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
        {label}
      </span>
      <div className="text-sm text-gray-900 dark:text-dark-text-primary">
        {value}
      </div>
    </div>
  )
}

export function InfoboxSection({ 
  title, 
  children 
}: { 
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-700 dark:text-dark-text-secondary mb-2 uppercase tracking-wide">
        {title}
      </h4>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export function InfoboxList({ items }: { items: Array<{ id: string; label: React.ReactNode }> }) {
  if (!items || items.length === 0) return null
  
  return (
    <ul className="space-y-1">
      {items.map(item => (
        <li key={item.id} className="text-sm text-gray-900 dark:text-dark-text-primary">
          {item.label}
        </li>
      ))}
    </ul>
  )
}


