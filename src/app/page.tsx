import Link from "next/link";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { HeroCarousel } from "@/components/hero-carousel";
import { SearchCapsule } from "@/components/search-capsule";
import { Badge } from "@/components/ui/badge";
import { hotels as mockHotels, articles } from "@/lib/mock-data";
import dbConnect from "@/lib/dbConnect";
import Hotel from "@/models/Hotel";

export default async function Home() {
  await dbConnect();
  
  // Try fetching hotels from DB, fallback to mock data
  const dbHotels = await Hotel.find().sort({ createdAt: -1 }).limit(6).lean();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedHotels = dbHotels.map((h: any) => ({
    _id: h._id.toString(),
    slug: h.slug,
    name: h.name,
    location: h.location,
    country: h.country,
    tags: h.tags,
    blurb: h.blurb,
    image: h.image,
    pricePerNight: h.pricePerNight,
    rating: h.rating
  }));

  const displayHotels = mappedHotels.length > 0 ? mappedHotels : mockHotels.slice(0, 6);
  const heroHotels = displayHotels.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden border-b min-h-dvh flex items-center">
        <div className="absolute inset-0">
          <HeroCarousel hotels={heroHotels} />
        </div>

        <div className="relative z-10 w-full mt-16">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="glass text-white font-medium">B2B Exclusive</Badge>
                <Badge className="glass text-white font-medium">Corporate Retreats</Badge>
                <Badge className="glass text-white font-medium">Luxury</Badge>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                The premier platform for corporate travel & retreats.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base text-white/80 sm:text-lg md:text-xl font-medium">
                Elevate your company's offsites with curated, exclusive properties worldwide. Negotiated corporate rates, seamless booking, and premium account management.
              </p>

              <div className="mt-10">
                <SearchCapsule variant="hero" />
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/hotels" className="shadow-lg py-6 px-8 text-base">
                  Explore properties
                </ButtonLink>
                <ButtonLink href="/dashboard/company/hotels/new" variant="secondary" className="glass py-6 px-8 text-base text-white hover:text-white">
                  Partner with us
                </ButtonLink>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/70 font-medium tracking-wide">
                <span className="inline-flex items-center gap-2">
                  <span className="floaty inline-block size-2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(255,215,0,0.18)]" />
                  Request a corporate demo · VIP concierge included
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium tracking-wide text-muted-foreground">
              Featured
            </div>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              New member hotels
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
              Hand-picked exclusive locations from our certified partners.
            </p>
          </div>
          <ButtonLink href="/hotels" variant="secondary" className="hidden sm:inline-flex">
            View all
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayHotels.map((h: any, idx: number) => (
            <Link
              key={h.slug}
              href={`/hotels/${h.slug}`}
              className="group relative overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-16/10">
                <Image
                  src={h.image}
                  alt={h.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/15 to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge className="glass">{idx === 0 ? "Editor’s pick" : "New"}</Badge>
                </div>
                {h.pricePerNight && (
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-background/90 text-foreground hover:bg-background/90 font-semibold shadow-sm backdrop-blur-md border-0">
                      ${h.pricePerNight} <span className="text-muted-foreground font-normal ml-0.5">/ night</span>
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-lg font-semibold tracking-tight">
                      {h.name}
                    </div>
                    <div className="truncate text-sm text-muted-foreground">
                      {h.location} · {h.country}
                    </div>
                  </div>
                  {h.rating && h.rating > 0 && (
                    <div className="flex items-center gap-1 font-medium bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 text-primary">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      {h.rating}
                    </div>
                  )}
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {h.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {h.tags.slice(0, 3).map((t: string) => (
                    <Badge key={t} variant="secondary" className="glass">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="md:col-span-5">
              <div className="rounded-3xl border p-6 glass">
                <div className="text-xs font-medium tracking-wide text-muted-foreground">
                  Journal
                </div>
                <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                  Stories that make you want to pack a bag.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  Authentic reviews, hidden gems, and top picks for your next journey.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/journal">Explore journal</ButtonLink>
                  <ButtonLink href="/guides" variant="secondary" className="glass">
                    Browse guides
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {articles.slice(0, 2).map((a) => (
                  <Link
                    key={a.slug}
                    href={`/journal/${a.slug}`}
                    className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-16/10">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
                      <div className="absolute left-4 top-4">
                        <Badge className="glass">{a.category}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-lg font-semibold tracking-tight">
                        {a.title}
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {a.excerpt}
                      </p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        {a.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
