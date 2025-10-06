/**
 * TABS COMPONENT
 * 
 * Tab navigation for switching between views
 */

'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  
  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content
  
  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="border-b border-gray-200 dark:border-dark-border-light">
        <nav className="flex gap-4" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:text-dark-text-secondary dark:hover:text-dark-text-primary'
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="py-4">
        {activeTabContent}
      </div>
    </div>
  )
}


