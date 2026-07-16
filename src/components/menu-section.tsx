"use client";

import { useState } from 'react';
import { Button } from '@/components/button';
import { site } from '@/lib/site';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleItems =
    activeCategory === 'All'
      ? site.menuItems
      : site.menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        {site.menuCategories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'bg-[#9f2323] text-white shadow-soft'
                  : 'border border-[#ddb0a6] bg-white text-[#7d1f1c] hover:bg-[#ffe7df]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.name} className="rounded-[1.75rem] border border-[#dfb1a8] bg-[#fffaf8] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e2826]">{item.category}</p>
                <h3 className="mt-2 font-display text-3xl text-[#321112]">{item.name}</h3>
              </div>
              <p className="rounded-full bg-[#fff1eb] px-3 py-1 text-sm font-semibold text-[#9f2323]">{item.price}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#fff1eb] px-3 py-1 text-xs font-semibold text-[#6e3d34] ring-1 ring-[#dfb1a8]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 h-40 rounded-[1.25rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(159,35,35,0.18)),linear-gradient(135deg,#fff5f1,#f2c1b5)]" />
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href={site.zomatoLink}>Order on Zomato</Button>
        <Button href={`https://wa.me/${site.whatsapp}`} variant="secondary">
          WhatsApp order
        </Button>
      </div>
    </div>
  );
}