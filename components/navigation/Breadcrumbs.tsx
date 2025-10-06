/**
 * BREADCRUMBS COMPONENT
 * 
 * Navigation breadcrumb trail - Intelligence style
 */

import Link from 'next/link'
import { ChevronRightIcon } from '../ui/Icons'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2 text-sm font-mono">
        <li>
          <Link
            href="/"
            className="text-intel-text-tertiary hover:text-intel-accent-primary transition-colors"
          >
            ~/
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRightIcon className="text-intel-text-muted" size={14} />
            
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-intel-text-tertiary hover:text-intel-accent-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-intel-text-primary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

