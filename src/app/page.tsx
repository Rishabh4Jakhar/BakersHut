import Image from 'next/image';
import { ArrowRight, Clock3, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/button';
import { GalleryCarousel } from '@/components/gallery-carousel';
import { MenuSection } from '@/components/menu-section';
import { ReviewsCarousel } from '@/components/reviews-carousel';
import { SectionHeading } from '@/components/section-heading';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <div className="pb-20">
      <section id="home" className="scroll-mt-24 bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 lg:px-8 lg:py-24">
          <div className="min-w-0 flex flex-col justify-center space-y-6 animate-fadeUp">
            <p className="inline-flex w-fit rounded-full bg-[#ffe8e2] px-4 py-2 text-sm font-semibold text-[#8e2826] ring-1 ring-[#dfb1a8]">
              Bakers Hut | Bakery and Cake Shop
            </p>
            <h1 className="font-display text-5xl leading-none text-[#321112] md:text-6xl lg:text-7xl text-balance">
              Cakes, Pizzas, Burgers, and More for Every Occasion
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#6d5335]">{site.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/#menu">Browse menu <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/#gallery" variant="secondary">View gallery</Button>
              <Button href={site.zomatoLink} variant="secondary">Zomato order</Button>
              <Button href={`https://wa.me/${site.whatsapp}`} variant="secondary">WhatsApp order <MessageCircle className="h-4 w-4" /></Button>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {site.heroHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#dfb1a8] bg-white/86 p-4 shadow-soft">
                  <p className="font-semibold text-[#321112]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6e3d34]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0 self-start px-2 pb-2 sm:px-3 sm:pb-3 lg:self-center">
            <div className="absolute inset-x-2 inset-y-2 translate-x-2 translate-y-2 rounded-[2rem] bg-[#d15c53] sm:inset-x-3 sm:inset-y-3 sm:translate-x-3 sm:translate-y-3" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#dfb1a8] bg-[#fffaf8] p-3 shadow-glow sm:p-5 lg:min-h-[620px]">
              <div className="grid gap-4 min-[480px]:grid-cols-2">
                <div className="min-w-0 rounded-[1.5rem] bg-[#ffe7df] p-4 min-[480px]:col-span-2 sm:p-5 lg:flex lg:min-h-[400px] lg:flex-col">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8e2826]">Storefront feeling</p>
                  <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[#dfb1a8] bg-[#f3c1b5] min-[480px]:aspect-[16/7] lg:aspect-auto lg:flex-1">
                    <Image
                      src={site.images.storefront}
                      alt="Bakery storefront placeholder"
                      fill
                      priority
                      sizes="(max-width: 479px) calc(100vw - 4.5rem), (max-width: 1024px) calc(100vw - 6rem), 600px"
                      
                    />
                  </div>
                </div>
                <div className="min-w-0 rounded-[1.5rem] bg-[#fff1eb] p-4">
                  <p className="text-sm font-semibold text-[#321112]">Opening hours</p>
                  <div className="mt-3 space-y-2 text-sm text-[#6e3d34]">
                    {site.hours.map((slot) => (
                      <div key={slot.day} className="flex items-center justify-between gap-3">
                        <span>{slot.day}</span>
                        <span>{slot.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="min-w-0 rounded-[1.5rem] bg-[#8e2826] p-4 text-white">
                  <p className="font-semibold">Quick actions</p>
                  <div className="mt-4 space-y-3 text-sm text-white/86">
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call: {site.phone}</p>
                    <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp ordering</p>
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Google Maps directions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A neighborhood bakery with a simple story and a clear menu"
          description={site.about.intro}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[#dfb1a8] bg-white p-6 shadow-soft">
            <p className="font-display text-3xl text-[#321112]">Family story</p>
            <p className="mt-4 leading-8 text-[#6e3d34]">{site.about.story}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.about.features.map((feature) => (
                <div key={feature} className="rounded-2xl bg-[#fff1eb] px-4 py-3 text-sm font-semibold text-[#7d1f1c]">
                  {feature}
                </div>
              ))}
            </div>
            <p className="mt-6 leading-7 text-[#6e3d34]">{site.about.focus}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {site.featuredProducts.map((product) => (
              <article key={product.name} className="rounded-[1.75rem] border border-[#dfb1a8] bg-[#fffaf8] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-[1.25rem] border border-dashed border-[#dfb1a8] bg-[#fff1eb]">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 3rem), 420px"
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e2826]">{product.category}</p>
                <h3 className="mt-3 font-display text-3xl text-[#321112]">{product.name}</h3>
                <p className="mt-3 leading-7 text-[#6e3d34]">{product.description}</p>
                <p className="mt-6 text-base font-semibold text-[#9f2323]">{product.price}</p>
              </article>
          ))}
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-24 bg-[#ffe8e2]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Menu"
            title="Fresh cakes, pizzas, burgers and much more!"
            description="Browse the menu by category to get straight to what you want."
          />
          <MenuSection />
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Recent bakery photos from the shop"
          description="A moving gallery of the storefront and display items."
        />
        <div className="mt-8">
          <GalleryCarousel />
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-between gap-4 rounded-[1.5rem] border border-[#dfb1a8] bg-[#fff1eb] p-5 text-[#321112] transition hover:bg-[#ffe7df]"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#9f2323] text-white">
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold">See more from Bakers Hut on Instagram</span>
              <span className="mt-1 block text-sm text-[#6e3d34]">Follow for cakes, fresh bakes, and shop updates.</span>
            </span>
          </span>
          <span className="shrink-0 text-sm font-semibold text-[#9f2323]">Open profile <ArrowRight className="ml-1 inline h-4 w-4" /></span>
        </a>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-[#fff8f4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="min-w-0 space-y-5">
            <SectionHeading
              eyebrow="Reviews"
              title="What customers say about Bakers Hut"
              description="A static set of real Google reviews presented in a moving carousel."
            />
            <ReviewsCarousel />
          </div>
          <div id="visit" className="min-w-0 rounded-[2rem] border border-[#dfb1a8] bg-[#fffaf8] p-6 shadow-soft scroll-mt-24">
            <SectionHeading
              eyebrow="Visit"
              title="Visit us or place an order"
              description="Call, WhatsApp, Zomato, or get directions without any extra friction."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#fff1eb] p-5">
                <MapPin className="h-5 w-5 text-[#9f2323]" />
                <p className="mt-4 font-semibold text-[#321112]">Google Maps</p>
                <p className="mt-2 text-sm leading-6 text-[#6e3d34]">Use directions to reach the shop at Jharoda Kalan.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button href={site.mapDirectionsUrl} variant="secondary">Open directions</Button>
                </div>
              </div>
              <div className="rounded-3xl bg-[#8e2826] p-5 text-white">
                <Clock3 className="h-5 w-5 text-[#ffd8d1]" />
                <p className="mt-4 font-semibold">Ordering</p>
                <p className="mt-2 text-sm leading-6 text-white/82">Call, WhatsApp, or Zomato without going through a contact form.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button href={`tel:${site.phone.replace(/\s+/g, '')}`} variant="secondary">Call now</Button>
                  <Button href={`https://wa.me/${site.whatsapp}`} variant="ghost">WhatsApp</Button>
                </div>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-dashed border-[#dfb1a8] bg-[#fff2ec] p-4 text-sm leading-6 text-[#6e3d34]">
              {site.address}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#dfb1a8] bg-white shadow-soft">
            <iframe
              title="Google Maps embed"
              src={site.mapEmbedUrl}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
