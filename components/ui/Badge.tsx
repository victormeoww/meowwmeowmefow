/**
 * BADGE COMPONENT
 * 
 * Status badges - Intelligence style
 */

import type { Status } from '@/types'
import { STATUS_CONFIG } from '@/lib/constants/statuses'
import { clsx } from 'clsx'

interface BadgeProps {
  status: Status
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Badge({ status, size = 'md', className }: BadgeProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.unknown
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  }
  
  // Map status to color for intel theme
  const statusColors: Record<Status, string> = {
    active: 'bg-status-active/10 text-status-active border-status-active/30',
    captured: 'bg-status-captured/10 text-status-captured border-status-captured/30',
    deceased: 'bg-status-deceased/10 text-status-deceased border-status-deceased/30',
    fugitive: 'bg-status-fugitive/10 text-status-fugitive border-status-fugitive/30',
    defunct: 'bg-status-defunct/10 text-status-defunct border-status-defunct/30',
    fragmented: 'bg-status-fragmented/10 text-status-fragmented border-status-fragmented/30',
    unknown: 'bg-status-unknown/10 text-status-unknown border-status-unknown/30',
  }
  
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium font-mono uppercase tracking-wider border rounded-md',
        statusColors[status],
        sizeClasses[size],
        className
      )}
    >
      {config.label}
    </span>
  )
}

