import Image from "next/image";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/page-shell";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guides } from "@/lib/mock-data";

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <PageShell title={guide.title} description={guide.excerpt}>
      <div className="mb-6 overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="relative aspect-[21/9]">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <Badge className="glass">Guide</Badge>
              <Badge className="glass">Local picks</Badge>
            </div>
            <div className="flex gap-2">
              <ButtonLink href="/guides" variant="secondary" size="sm" className="glass">
                Back
              </ButtonLink>
              <ButtonLink href="/hotels" size="sm">
                Find hotels
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                This page is a template for a destination guide (spots,
                neighborhoods, culture, hotel picks).
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Top neighborhoods</li>
                <li>Food & drink</li>
                <li>Architecture & design</li>
                <li>Recommended hotels</li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/hotels">Find hotels</ButtonLink>
                <ButtonLink href="/guides" variant="secondary">
                  Back to guides
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="rounded-3xl glass">
            <CardHeader>
              <CardTitle>Map placeholder</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Embed a map provider or custom map component here.
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}

