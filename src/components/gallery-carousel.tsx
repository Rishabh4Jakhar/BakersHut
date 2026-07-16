"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { Button } from '@/components/button';
import { site } from '@/lib/site';

export function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (!emblaApi) return undefined;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="rounded-[2rem] border border-[#dfb1a8] bg-white p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e2826]">Google Maps photos</p>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous gallery image">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="secondary" onClick={() => emblaApi?.scrollNext()} aria-label="Next gallery image">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {site.gallery.map((image) => (
            <div key={image.title} className="min-w-0 flex-[0_0_82%] px-2 sm:flex-[0_0_52%] lg:flex-[0_0_34%]">
              <article className="overflow-hidden rounded-[1.75rem] border border-[#dfb1a8] bg-[#fffaf8] shadow-soft">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 52vw, 34vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e2826]">{image.category}</p>
                  <h3 className="mt-2 font-display text-2xl text-[#321112]">{image.title}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}