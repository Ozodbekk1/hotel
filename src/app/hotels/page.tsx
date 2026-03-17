import Link from "next/link";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dbConnect from "@/lib/dbConnect";
import Hotel from "@/models/Hotel";
import { hotels as mockHotels } from "@/lib/mock-data";

export default async function HotelsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;

  await dbConnect();
  let query = {};
  if (tag && tag !== "all") {
    query = { tags: tag };
  }

  // Fetch real hotels, fallback to mock if db is empty or failed
  const dbHotels = await Hotel.find(query).lean();

  // Transforming _id to string to pass safely to client
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const realHotels = dbHotels.map((h: any) => ({
    _id: h._id.toString(),
    slug: h.slug,
    name: h.name,
    location: h.location,
    country: h.country,
    tags: h.tags,
    blurb: h.blurb,
    image: h.image,
  }));

  const filtered =
    realHotels.length > 0
      ? realHotels
      : tag
      ? mockHotels.filter((h) => h.tags.includes(tag))
      : mockHotels;

  return (
    <PageShell
      title="Hotels"
      description="Browse a curated set of hotels. Replace this mock data with your CMS/API."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          "all",
          "new",
          "city",
          "beach",
          "mountain",
          "wellbeing",
          "sustainable",
        ].map((t) => (
          <Link
            key={t}
            href={t === "all" ? "/hotels" : `/hotels?tag=${t}`}
            className="inline-flex"
          >
            <Badge variant={t === (tag ?? "all") ? "default" : "secondary"}>
              {t}
            </Badge>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((h) => (
          <Link key={h.slug} href={`/hotels/${h.slug}`} className="block">
            <Card className="group h-full overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={h.image}
                  alt={h.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  {h.tags.slice(0, 2).map((t: string) => (
                    <Badge key={t} className="glass">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{h.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {h.location} · {h.country}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {h.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {h.tags.slice(0, 4).map((t: string) => (
                    <Badge key={t} variant="secondary" className="glass">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="font-semibold text-primary hover:underline">
                    View & Book &rarr;
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

