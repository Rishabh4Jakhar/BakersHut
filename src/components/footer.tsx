import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-[#e3c1b8] bg-[#fff4ee]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm text-[#6e3d34] sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl text-[#321112]">Bakers Hut</p>
          <p className="mt-3 max-w-sm leading-6">{site.tagline}</p>
          <br />
          <br />
          <p className="text-[#6e3d34]">
            Made with &lt;3 by{' '}
            <a href="https://github.com/rishabh4jakhar" target="_blank" rel="noreferrer" className="text-[#8e2826] hover:text-[#9f2323]">
              Rishabh
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#321112]">Explore</p>
          <div className="mt-3 flex flex-col gap-2">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#7f4a11]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#321112]">Contact</p>
          <p className="mt-3 leading-6">{site.address}</p>
          <p className="mt-2">{site.phone}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-[#8e2826] transition hover:text-[#9f2323]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
