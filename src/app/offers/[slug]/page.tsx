import { notFound } from "next/navigation";

import { PageShell } from "@/components/page-shell";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { offers } from "@/lib/mock-data";

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) notFound();

  return (
    <PageShell title={offer.title} description={offer.excerpt}>
      <div className="mb-6 overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="relative aspect-[21/9]">
          <img
            src={offer.image}
            alt={offer.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <Badge className="glass">Offer</Badge>
              <Badge className="glass">Limited-time</Badge>
            </div>
            <div className="flex gap-2">
              <ButtonLink href="/search" size="sm">
                Search availability
              </ButtonLink>
              <ButtonLink href="/offers" variant="secondary" size="sm" className="glass">
                Back
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>What’s included</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-5">
                <li>Offer details placeholder</li>
                <li>Eligibility and blackout dates</li>
                <li>CTA to booking/search results</li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/search">Search availability</ButtonLink>
                <ButtonLink href="/offers" variant="secondary">
                  Back to offers
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="rounded-3xl glass">
            <CardHeader>
              <CardTitle>Fine print</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Replace with your real terms and conditions for this promotion.
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}

