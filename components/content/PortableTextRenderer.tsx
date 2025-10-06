/**
 * PORTABLE TEXT RENDERER
 * 
 * Renders Sanity's Portable Text (rich text) with custom components
 */

import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@/types'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null
      
      return (
        <figure className="my-8">
          <img 
            src={value.asset.url || value.url}
            alt={value.alt || ''}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-gray-600 dark:text-dark-text-secondary text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    }
  },
  
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-dark-text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-dark-text-primary pb-2 border-b border-gray-200 dark:border-dark-border-light">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-dark-text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-3 mb-2 text-gray-900 dark:text-dark-text-primary">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-7 text-gray-700 dark:text-dark-text-secondary mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600 dark:text-dark-text-secondary bg-gray-50 dark:bg-dark-bg-tertiary py-2">
        {children}
      </blockquote>
    )
  },
  
  marks: {
    link: ({ children, value }: any) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined
      
      return (
        <a 
          href={value?.href}
          target={target}
          rel={rel}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      )
    },
    
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900 dark:text-dark-text-primary">
        {children}
      </strong>
    ),
    
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),
    
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-dark-bg-tertiary border border-gray-200 dark:border-dark-border-light rounded text-sm font-mono">
        {children}
      </code>
    ),
    
    // Citation mark - would reference Citation document
    citation: ({ children, value }: any) => (
      <sup className="citation-inline">
        <a href={`#cite-${value?._ref}`} className="text-blue-600 dark:text-blue-400 no-underline hover:underline">
          [{children}]
        </a>
      </sup>
    )
  },
  
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-dark-text-secondary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-dark-text-secondary">
        {children}
      </ol>
    )
  },
  
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-7">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="leading-7">
        {children}
      </li>
    )
  }
}

interface PortableTextRendererProps {
  content: PortableTextBlock[]
  className?: string
}

export function PortableTextRenderer({ content, className }: PortableTextRendererProps) {
  if (!content || content.length === 0) {
    return null
  }
  
  return (
    <div className={`wiki-content ${className || ''}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}


