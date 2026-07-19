"use client";

import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/button';
import { site, type MenuItem } from '@/lib/site';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

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
        {visibleItems.map((item: MenuItem) => {
          const selectedLabel = selectedVariants[item.name] ?? item.variants?.[0]?.label;
          const selectedVariant = item.variants?.find((variant) => variant.label === selectedLabel);

          return (
            <article key={item.name} className="rounded-[1.75rem] border border-[#dfb1a8] bg-[#fffaf8] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e2826]">{item.category}</p>
                <h3 className="mt-2 font-display text-3xl text-[#321112]">{item.name}</h3>
              </div>
              <p className="shrink-0 rounded-full bg-[#fff1eb] px-3 py-1 text-sm font-semibold text-[#9f2323]">{selectedVariant?.price ?? item.price}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#fff1eb] px-3 py-1 text-xs font-semibold text-[#6e3d34] ring-1 ring-[#dfb1a8]">
                  {tag}
                </span>
              ))}
            </div>
            {item.variants ? (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8e2826]">Choose size</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.variants.map((variant) => (
                    <button
                      key={variant.label}
                      type="button"
                      onClick={() => setSelectedVariants((current) => ({ ...current, [item.name]: variant.label }))}
                      className={`rounded-full px-3 py-2 text-xs font-semibold ring-1 transition ${
                        selectedVariant?.label === variant.label
                          ? 'bg-[#9f2323] text-white ring-[#9f2323]'
                          : 'bg-white text-[#7d1f1c] ring-[#ddb0a6] hover:bg-[#ffe7df]'
                      }`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="relative mt-5 flex h-48 items-center justify-center overflow-hidden rounded-[1.25rem] border border-dashed border-[#dfb1a8] bg-[#fff1eb] sm:h-52">
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(50vw - 3rem), 360px"
                  className="object-contain p-2"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 px-4 text-center text-[#8e2826]">
                  <ImageOff className="h-6 w-6" aria-hidden="true" />
                  <p className="text-xs font-semibold">Image coming soon</p>
                </div>
              )}
            </div>
            </article>
          );
        })}
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
