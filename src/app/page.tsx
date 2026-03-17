import Link from "next/link";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { HeroCarousel } from "@/components/hero-carousel";
import { SearchCapsule } from "@/components/search-capsule";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { hotels as mockHotels, articles } from "@/lib/mock-data";
import dbConnect from "@/lib/dbConnect";
import Hotel from "@/models/Hotel";
import {
  BadgeCheck,
  CalendarClock,
  Handshake,
  MapPinned,
  Sparkles,
  ShieldCheck,
  Timer,
  Zap,
} from "lucide-react";

type HotelPreview = {
  _id?: string;
  slug: string;
  name: string;
  location: string;
  country: string;
  tags: string[];
  blurb: string;
  image: string;
  pricePerNight?: number;
  rating?: number;
};

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string");
}

function mapDbHotel(value: unknown): HotelPreview | null {
  if (!value || typeof value !== "object") return null;
  const h = value as Record<string, unknown>;

  const slug = typeof h.slug === "string" ? h.slug : null;
  const name = typeof h.name === "string" ? h.name : null;
  const location = typeof h.location === "string" ? h.location : null;
  const country = typeof h.country === "string" ? h.country : null;
  const blurb = typeof h.blurb === "string" ? h.blurb : null;
  const image = typeof h.image === "string" ? h.image : null;
  const tags = toStringArray(h.tags);

  if (!slug || !name || !location || !country || !blurb || !image) return null;

  const id =
    typeof h._id === "object" &&
    h._id !== null &&
    "toString" in h._id &&
    typeof (h._id as { toString: unknown }).toString === "function"
      ? (h._id as { toString(): string }).toString()
      : undefined;

  const pricePerNight =
    typeof h.pricePerNight === "number" ? h.pricePerNight : undefined;
  const rating = typeof h.rating === "number" ? h.rating : undefined;

  return {
    _id: id,
    slug,
    name,
    location,
    country,
    tags,
    blurb,
    image,
    pricePerNight,
    rating,
  };
}

export default async function Home() {
  await dbConnect();
  
  // Try fetching hotels from DB, fallback to mock data
  const dbHotels = (await Hotel.find()
    .sort({ createdAt: -1 })
    .limit(6)
    .lean()) as unknown[];

  const mappedHotels = dbHotels
    .map(mapDbHotel)
    .filter((h): h is HotelPreview => Boolean(h));

  const displayHotels: HotelPreview[] =
    mappedHotels.length > 0
      ? mappedHotels
      : (mockHotels.slice(0, 6) as unknown as HotelPreview[]);
  const heroHotels = displayHotels.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden border-b min-h-[70dvh] md:min-h-[74dvh] flex items-center">
        <div className="absolute inset-0">
          <HeroCarousel hotels={heroHotels} />
        </div>

        <div className="relative z-10 w-full pt-20 sm:pt-24">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="rounded-4xl border border-white/10 bg-black/25 p-5 backdrop-blur-md sm:p-6 lg:p-7">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-white/15 bg-black/20 text-white backdrop-blur-md font-medium">
                      B2B Exclusive
                    </Badge>
                    <Badge className="border-white/15 bg-black/20 text-white backdrop-blur-md font-medium">
                      Corporate Retreats
                    </Badge>
                    <Badge className="border-white/15 bg-black/20 text-white backdrop-blur-md font-medium">
                      Luxury
                    </Badge>
                  </div>

                  <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    The premier platform for corporate travel & retreats.
                  </h1>
                  <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg font-medium">
                    Elevate your company’s offsites with curated, exclusive
                    properties worldwide. Negotiated corporate rates, seamless
                    booking, and premium account management.
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm text-white/70 font-medium tracking-wide">
                    <span className="inline-flex items-center gap-2">
                      <span className="floaty inline-block size-2 rounded-full bg-primary ring-4 ring-primary/15" />
                      Request a corporate demo · VIP concierge included
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="mt-2 lg:mt-0">
                    <SearchCapsule variant="hero" />
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <ButtonLink href="/hotels" className="py-6 px-8 text-base">
                      Explore properties
                    </ButtonLink>
                    <ButtonLink
                      href="/dashboard/company/hotels/new"
                      variant="outline"
                      className="border-white/25 bg-white/10 py-6 px-8 text-base text-white hover:bg-white/15 hover:text-white"
                    >
                      Partner with us
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-medium tracking-wide text-muted-foreground">
                Built for teams
              </div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Everything you need for a smooth offsite — in one place.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                From sourcing to invoicing, we reduce busywork and increase
                confidence with policy-friendly booking, clear terms, and
                concierge support.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "24/7 concierge",
                  "Flexible terms",
                  "Centralized billing",
                  "Verified partners",
                  "Group-friendly",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="glass">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Sparkles,
                    title: "Curated, high-signal inventory",
                    desc: "Premium stays filtered for corporate needs: meeting space, privacy, and service quality.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Policy-ready checkout",
                    desc: "Receipts, cancellation terms, and contact details organized for finance and travel ops.",
                  },
                  {
                    icon: Timer,
                    title: "Fast sourcing for your dates",
                    desc: "Shortlist options quickly and share with stakeholders for approvals in minutes.",
                  },
                  {
                    icon: Zap,
                    title: "Negotiated corporate value",
                    desc: "Preferred pricing, add-ons, and upgrades based on volume and seasonality.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-3xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid size-10 place-items-center rounded-2xl border bg-muted/40">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-semibold tracking-tight">
                          {title}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
          {displayHotels.map((h, idx) => (
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
                  {h.tags.slice(0, 3).map((t) => (
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

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-medium tracking-wide text-muted-foreground">
                How it works
              </div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                From idea → itinerary in a few steps.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Plan faster with a workflow that’s easy for stakeholders and
                friendly for finance.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/hotels">Start exploring</ButtonLink>
                <ButtonLink href="/contact" variant="secondary" className="glass">
                  Talk to sales
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4">
                {[
                  {
                    icon: MapPinned,
                    title: "1) Choose destination + dates",
                    desc: "Search across verified properties with filters that match offsite needs.",
                  },
                  {
                    icon: CalendarClock,
                    title: "2) Compare and share options",
                    desc: "Send shortlists to decision-makers — keep everyone aligned without long email threads.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "3) Book with clear terms",
                    desc: "See cancellation rules, deposits, and inclusions up front for fewer surprises.",
                  },
                  {
                    icon: Handshake,
                    title: "4) Get concierge support",
                    desc: "Rooming lists, special requests, invoices, and change management — handled.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-3xl border p-5 glass">
                    <div className="flex items-start gap-3">
                      <div className="grid size-10 place-items-center rounded-2xl border bg-muted/40">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold tracking-tight">
                          {title}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="relative overflow-hidden rounded-4xl border p-6 glass sm:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute -left-24 -top-24 size-80 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-accent/15 blur-3xl" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                  A premium offsite experience — without the planning chaos.
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                  Get a curated shortlist in 24 hours, plus assistance with group
                  terms, meeting needs, and billing.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Priority sourcing for your dates",
                    "Group terms & cancellation clarity",
                    "Rooming list & special requests",
                    "Centralized invoices and receipts",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-2 rounded-2xl border bg-background/60 p-3"
                    >
                      <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div className="text-sm font-medium">{t}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card className="rounded-4xl border bg-card/70 shadow-sm backdrop-blur">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">
                      Request a corporate demo
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      We’ll send a tailored shortlist and walk you through the
                      workflow.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid gap-2">
                      <Input placeholder="Work email" type="email" />
                      <Input placeholder="Company name" />
                    </div>
                    <Button className="w-full">Get a shortlist</Button>
                    <div className="text-xs text-muted-foreground">
                      By submitting, you agree to receive product updates. You
                      can unsubscribe anytime.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium tracking-wide text-muted-foreground">
                Loved by planners
              </div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Teams run better offsites with less effort.
              </h2>
            </div>
            <ButtonLink href="/contact" variant="secondary" className="hidden sm:inline-flex glass">
              Get help planning
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                quote:
                  "We cut sourcing time from days to hours. Having clear terms and one place for approvals is a game-changer.",
                name: "Operations Lead",
                company: "Series B SaaS",
              },
              {
                quote:
                  "The shortlist was spot on — meeting space, great Wi‑Fi, and everyone felt taken care of. Finance loved the receipts.",
                name: "People & Culture",
                company: "Remote-first team",
              },
              {
                quote:
                  "Changes happen. Concierge handled the rooming list and date updates without drama. It just felt premium.",
                name: "Executive Assistant",
                company: "Global agency",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-3xl border p-6 glass">
                <div className="text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.company}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium">
                    <Sparkles className="size-3 text-primary" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-10" />

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-medium tracking-wide text-muted-foreground">
                FAQ
              </div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Quick answers for busy teams.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Still have questions? We’ll help you plan a great offsite.
              </p>
              <div className="mt-6 flex gap-3">
                <ButtonLink href="/contact">Contact</ButtonLink>
                <ButtonLink href="/hotels" variant="secondary" className="glass">
                  Browse hotels
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3">
                {[
                  {
                    q: "Do you support group bookings and rooming lists?",
                    a: "Yes — we can help manage rooming lists, special requests, and changes as your headcount evolves.",
                  },
                  {
                    q: "Can we pay with a single invoice?",
                    a: "You can centralize receipts and billing details for easier expense reconciliation and finance workflows.",
                  },
                  {
                    q: "What about cancellation terms and deposits?",
                    a: "Terms are shown clearly before booking. For larger groups, we help negotiate terms that fit your risk tolerance.",
                  },
                  {
                    q: "Is this only for corporate travel?",
                    a: "The platform is optimized for teams, but you can use it for any trip where you value curated stays and clear terms.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-3xl border bg-card/60 p-5 open:bg-card"
                  >
                    <summary className="cursor-pointer list-none select-none">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold tracking-tight">
                          {item.q}
                        </div>
                        <span className="grid size-7 place-items-center rounded-full border bg-background/60 text-muted-foreground transition group-open:rotate-45 group-open:text-foreground">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
