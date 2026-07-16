"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { site } from '@/lib/site';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e3c1b8]/80 bg-[#fff4ee]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="font-display text-2xl text-[#321112]">
          Bakers Hut
        </Link>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#6e2d25] transition hover:text-[#9f2323]">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="inline-flex items-center gap-2 rounded-full border border-[#ddb5ab] bg-white px-4 py-2 text-sm font-semibold text-[#6e2d25] md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#e3c1b8] bg-[#fff7f2] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-[#6e2d25] transition hover:bg-[#ffe6df]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
