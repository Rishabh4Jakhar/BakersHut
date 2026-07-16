"use client";

import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

export function ReviewsCarousel() {
  const [reviews, setReviews] = useState(site.reviews);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    setReviews(site.reviews);

    return undefined;
  }, []);

  useEffect(() => {
    if (!emblaApi || reviews.length < 2) return undefined;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [emblaApi, reviews.length]);

  return (
    <div className="rounded-[2rem] border border-[#dfb1a8] bg-white p-4 shadow-soft">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {reviews.map((review) => (
            <div key={review.name + review.quote} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_92%]">
              <article className="rounded-[1.75rem] border border-[#dfb1a8] bg-[#fffaf8] p-6 shadow-soft">
                <div className="flex items-center gap-1 text-[#9f2323]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-[#6e3d34]">“{review.quote}”</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#321112]">{review.name}</p>
                    <p className="text-sm text-[#8e2826]">Google Maps review</p>
                  </div>
                  <p className="rounded-full bg-[#fff1eb] px-3 py-1 text-sm font-semibold text-[#9f2323]">{review.rating}.0</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}