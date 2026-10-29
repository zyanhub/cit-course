'use client'

import { MapPin, Code2 } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Dev Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future of IT education. Free resources for everyone.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/#overview' },
                { label: 'Courses', href: '/#courses' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            Built by{' '}
            <span className="font-semibold text-foreground">Dev Hub</span>
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
