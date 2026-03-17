import Link from "next/link";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hotels } from "@/lib/mock-data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    destination?: string;
    guests?: string;
    promo?: string;
    from?: string;
    to?: string;
  }>;
}) {
  const { destination, guests, promo, from, to } = await searchParams;

  return (
    <PageShell
      title="Search"
      description="Demo search results page. Filter and availability logic should come from your booking API."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {destination ? <Badge variant="secondary">{destination}</Badge> : null}
        {from ? <Badge variant="secondary">from: {from.slice(0, 10)}</Badge> : null}
        {to ? <Badge variant="secondary">to: {to.slice(0, 10)}</Badge> : null}
        {guests ? <Badge variant="secondary">guests: {guests}</Badge> : null}
        {promo ? <Badge variant="secondary">promo: {promo}</Badge> : null}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {hotels.map((h) => (
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
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{h.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {h.location} · {h.country}
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {h.blurb}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

