/**
 * HEADER COMPONENT
 * 
 * Intelligence platform navigation
 */

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SearchBar } from '../navigation/SearchBar'
import { MenuIcon, CloseIcon } from '../ui/Icons'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Organizations', href: '/cartels' },
    { name: 'Subjects', href: '/people' },
    { name: 'Incidents', href: '/incidents' },
    { name: 'Routes', href: '/routes' },
    { name: 'Locations', href: '/locations' }
  ]
  
  return (
    <header className="sticky top-0 z-50 bg-intel-bg-primary/95 backdrop-blur-sm border-b border-intel-border-light">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-6 h-6 bg-intel-accent-primary/20 border border-intel-accent-primary/30 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-intel-accent-primary rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-intel-text-primary tracking-tight">
                  NarcoWatch
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-intel-bg-secondary border border-intel-border-medium rounded text-xs font-mono text-intel-text-tertiary">
                  INTEL
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 text-sm text-intel-text-secondary hover:text-intel-text-primary hover:bg-intel-bg-secondary rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:block">
              <SearchBar />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-intel-text-secondary hover:text-intel-text-primary hover:bg-intel-bg-secondary rounded-md transition-colors"
            >
              {mobileMenuOpen ? (
                <CloseIcon size={20} />
              ) : (
                <MenuIcon size={20} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-intel-border-light">
            <div className="flex flex-col gap-2">
              {/* Mobile Search */}
              <div className="md:hidden mb-4">
                <SearchBar />
              </div>
              
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm text-intel-text-secondary hover:text-intel-text-primary hover:bg-intel-bg-secondary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

