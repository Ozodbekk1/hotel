import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { offers } from "@/lib/mock-data";

export default function OffersPage() {
  return (
    <PageShell
      title="Offers"
      description="Landing page template for deals and promotions."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {offers.map((o) => (
          <Link key={o.slug} href={`/offers/${o.slug}`} className="block">
            <Card className="group h-full overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10]">
                <img
                  src={o.image}
                  alt={o.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge className="glass">Deal</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{o.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {o.excerpt}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

